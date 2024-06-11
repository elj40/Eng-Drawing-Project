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
					CONSTRUCTIONS.push(this.line);
				}
			}
			if (MOUSE_PRESSED && !this.closeToOtherPoint(mouseX,mouseY,this.select_radius)) {
				this.line = new Line2D();
				this.line.pointA = new Point2D(mouseX, mouseY, this.line);
				this.points.push(this.line.pointA);
				CONSTRUCTIONS.push(this.line.pointA);
				this.line.pointB = new Point2D(mouseX, mouseY, this.line);
				CONSTRUCTIONS.push(this.line);
			}
		}else {
			this.line.pointB.x = mouseX;
			this.line.pointB.y = mouseY;
			for (let i = 0; i < this.points.length; i++) {
				this.points[i].update();
				if (MOUSE_RELEASED && this.points[i].distance(mouseX, mouseY) <= this.select_radius) {
					this.line.pointB = this.points[i];
					STATEMACHINE.change("add_lines");
				}
			}
			if (MOUSE_RELEASED && !this.closeToOtherPoint(mouseX,mouseY,this.select_radius)) {
				CONSTRUCTIONS.push(this.line.pointB);
				STATEMACHINE.change("add_lines");
			}
		}
			
	}
	
	display() {
		for (let i = 0; i < this.points.length; i++) {
			if (this.points[i].distance(mouseX, mouseY) <= this.select_radius) this.points[i].highlight();
		}
		
		if (this.line) this.line.display();
	}
	closeToOtherPoint(x,y,r) {
		for (let p of this.points) {
			let dist_ = hypoteneuse(x,y,p.x,p.y);
			if (dist_ <= r) return true;
		}
		return false;
	}
}