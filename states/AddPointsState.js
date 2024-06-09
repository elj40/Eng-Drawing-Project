class AddPointsState extends BaseState {
	constructor() {
		super("add_points");
		this.points = [];
		this.select_radius = 10;
	}
	enter(options) {
		this.points = [];
		this.points = this.pointsFromConstructions(CONSTRUCTIONS);
	}
	update() {
		for (let i = 0; i < this.points.length; i++) {
			this.points[i].update();
			//implement this once statemachine has been built
			if (MOUSE_PRESSED && distance(mouseX, mouseY,CONSTRUCTIONS[i].x,CONSTRUCTIONS[i].y) <= this.select_radius) STATEMACHINE.change("move_point", {selected: this.points[i], previousState: this.name});
		}
		if (MOUSE_RELEASED && !this.closeToOtherPoint(mouseX,mouseY,this.select_radius)) {
			let p = new Point2D(mouseX, mouseY);
			CONSTRUCTIONS.push(p);
			this.points.push(p);
		}
	}
	display() {

		
		for (let i = 0; i < this.points.length; i++) {
			if (distance(mouseX, mouseY,this.points[i].x,this.points[i].y) <= this.select_radius) this.points[i].highlight();
		}
	}
	closeToOtherPoint(x,y,r) {
		for (let p of CONSTRUCTIONS) {
			let dist_ = distance(x,y,p.x,p.y);
			if (dist_ <= r) return true;
		}
		
		return false;
	}
	pointsFromConstructions(cnstr) {
		let points = [];
		for (let c of cnstr) {
			if (c instanceof Point2D) points.push(c);
		}
		return points;
	}
}
function changeState(s, options) {}
