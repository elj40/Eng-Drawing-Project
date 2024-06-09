class BaseState {
	constructor(name) {
		this.name = name;
	}
	update() {}
	display() {
		console.log("displaying base state");
	}
	enter(options) {}
	exit() {}
}