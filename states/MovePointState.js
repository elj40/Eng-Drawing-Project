class MovePointState extends BaseState {
	constructor() {
		super("move_point");
		this.previousState = "";
		this.point = null;
		this.pointDeleted = false;
	}
	enter(options) {
		this.previousState = options.previousState;
		this.point = options.selected;
		this.pointDeleted =  false;
	}
	
	update() {
		this.point.x = mouseX;
		this.point.y = mouseY;
		
		if (MOUSE_RELEASED) STATEMACHINE.change(this.previousState);
		if (PRESSED_KEYS['d']) {
			TO_DELETE.push(this.point);
			this.pointDeleted = true;
		}
	}
	
	display() {
		if (!this.pointDeleted) this.point.highlight();
	}
}