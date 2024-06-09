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
		
		MODE_DISPLAY.innerText = name;
	}
	
	add(name, state) {
		this.states[name] = state;
	}
	remove(name) {
		delete this.states[name];
	}
	update() {
		if (PRESSED_KEYS['Escape']) this.change('normal');
		this.currentState.update();
	}
	
	display() {
		this.currentState.display();
	}
}