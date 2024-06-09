class StateManager {
	constructor() {
		this.states = {};
		this.currentState = new BaseState();
	}
	change(name, options = {}) {
		if (!this.states.hasOwnProperty(name)) {
			console.log("StateMachine does not have state: "+name);
			return;
		}
		this.currentState.exit()
		this.currentState = this.states[name];
		this.currentState.enter(options);
	}
	
	add(name, state) {
		this.states[name] = state;
	}
	remove(name) {
		delete this.states[name];
	}
	update() {
		this.currentState.update();
	}
	
	display() {
		this.currentState.display();
	}
}