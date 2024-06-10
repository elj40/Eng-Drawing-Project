class AddLineState extends BaseState {
	constructor() {
		super("add_lines");
		this.points = [];
		this.line = null;
		this.point_count = 0;
		this.select_radius = 10;
	}
	enter(options) {
		this.points = pointsFromConstructions(CONSTRUCTIONS);
		this.line = null;
	}
	update() {
		if (this.line === null) {
			for (let i = 0; i < this.points.length; i++) {
				this.points[i].update();
				if (MOUSE_PRESSED && this.points[i].distance(mouseX, mouseY) <= this.select_radius) {
					this.line = new Line2D();
					this.line.pointA = this.points[i];
					this.line.pointB = new Point2D(mouseX, mouseY);
					this.points.push(this.line.pointB);
					CONSTRUCTIONS.push(this.line.pointB);
					CONSTRUCTIONS.push(this.line);
					STATEMACHINE.change("move_point", {selected: this.line.pointB, previousState: this.name});
				}
			}
			if (MOUSE_PRESSED && !this.closeToOtherPoint(mouseX,mouseY,this.select_radius)) {
				this.line = new Line2D();
				this.line.pointA = new Point2D(mouseX, mouseY);
				this.points.push(this.line.pointA);
				CONSTRUCTIONS.push(this.line.pointA);
				this.line.pointB = new Point2D(mouseX, mouseY);
				this.points.push(this.line.pointB);
				CONSTRUCTIONS.push(this.line.pointB);
				CONSTRUCTIONS.push(this.line);
				STATEMACHINE.change("move_point", {selected: this.line.pointB, previousState: this.name});
			}
		}
			
	}
	
	display() {
		for (let i = 0; i < this.points.length; i++) {
			if (this.points[i].distance(mouseX, mouseY) <= this.select_radius) this.points[i].highlight();
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