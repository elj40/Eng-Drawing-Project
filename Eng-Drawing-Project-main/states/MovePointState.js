class MovePointState extends BaseState {
	constructor() {
		super("move_point");
		this.previousState = "";
		this.point = null;
	}
	enter(options) {
		this.previousState = options.previousState;
		this.point = options.selected;
	}
	
	update() {
		this.point.x = mouseX;
		this.point.y = mouseY;
	}
}