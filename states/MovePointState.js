class MovePointState extends BaseState {
	constructor() {
		super("move_point");
		this.previousState = "";
		this.point = null;
		this.points = []
		this.pointDeleted = false;
	}
	enter(options) {
		this.previousState = options.previousState;
		this.point = options.selected;
		this.pointDeleted =  false;
		this.points = []
		this.points = pointsFromConstructions(CONSTRUCTIONS);
	}
	
	update() {
		this.point.x = mouseX;
		this.point.y = mouseY;
		
		if (MOUSE_RELEASED) {
			let other_point = this.closeToOtherPoint(mouseX,mouseY, 10)
			console.log("Point in range? ", other_point)
			if (other_point) {
				this.handlePointCollapse(other_point)
				this.pointDeleted = true;
			}
			STATEMACHINE.change(this.previousState);
		}
		if (PRESSED_KEYS['d']) {
			this.point.destroy();
			this.pointDeleted = true;
		}
	}
	
	display() {
		if (!this.pointDeleted) this.point.highlight();
	}
	closeToOtherPoint(x,y,r) {
		for (let p of this.points) {
			let dist_ = hypoteneuse(x,y,p.x,p.y);
			if (dist_ <= r && p != this.point) return p;
		}
		return false;
	}
	handlePointCollapse(other_point) {
		if (this.point.parent) {
			let pa = this.point.parent;
			const point_index = pa.children.indexOf(this.point)
			pa.children.splice(point_index, 1)
		}
		console.log(CONSTRUCTIONS)
		this.point.destroy();
		console.log(CONSTRUCTIONS)
	}
}
