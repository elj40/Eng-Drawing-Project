class EditLineState extends BaseState {
	constructor() {
		super("edit_line");
		this.line = null;
		this.previousState = "";
	}
	enter(o) {
		this.line = o.selected;
		this.previousState = o.previousState;
	}
	update() {
		if (PRESSED_KEYS['d']) {
			TO_DELETE.push(this.line);
			STATEMACHINE.change(this.previousState);
		}
	}
	display() {
		
	}
}