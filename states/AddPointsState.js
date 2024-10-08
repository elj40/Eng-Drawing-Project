class AddPointsState extends BaseState {
	constructor() {
		super("add_points");
		this.points = [];
		this.select_radius = 10;
	}
	enter(options) {
		this.points = [];
		this.points = pointsFromConstructions(CONSTRUCTIONS);
		
	}
	update() {
		for (let i = 0; i < this.points.length; i++) {
			this.points[i].update();
			if (MOUSE_PRESSED && hypoteneuse(mouseX, mouseY,CONSTRUCTIONS[i].x,CONSTRUCTIONS[i].y) <= this.select_radius) {
				STATEMACHINE.change("move_point", {selected: this.points[i], previousState: this.name});
			}
		}
		if (MOUSE_RELEASED && !this.closeToOtherPoint(mouseX,mouseY,this.select_radius)) {
			let p = new Point2D(mouseX, mouseY);
			CONSTRUCTIONS.push(p);
			this.points.push(p);
		}
	}
	display() {
		for (let i = 0; i < this.points.length; i++) {
			if (hypoteneuse(mouseX, mouseY,this.points[i].x,this.points[i].y) <= this.select_radius) this.points[i].highlight();
		}
	}
	closeToOtherPoint(x,y,r) {
		for (let p of this.points) {
			let dist_ = hypoteneuse(x,y,p.x,p.y);
			if (dist_ <= r) return true;
		}
		return false;
	}
}
