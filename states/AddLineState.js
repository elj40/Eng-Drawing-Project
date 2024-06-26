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
					this.line.children.push(this.points[i]);
					this.line.children.push(new Point2D(mouseX, mouseY, this.line));
					CONSTRUCTIONS.push(this.line);
				}
			}
			if (MOUSE_PRESSED && !this.closeToOtherPoint(mouseX,mouseY,this.select_radius)) {
				this.line = new Line2D();
				let pointA = new Point2D(mouseX, mouseY, this.line)
				let pointB = new Point2D(mouseX, mouseY, this.line)

				this.line.children.push(pointA);
				this.line.children.push(pointB);

				this.points.push(pointA);
				CONSTRUCTIONS.push(pointA);
				CONSTRUCTIONS.push(this.line);
			}
		}else {
			this.line.children[1].x = mouseX;
			this.line.children[1].y = mouseY;
			for (let i = 0; i < this.points.length; i++) {
				this.points[i].update();
				if (MOUSE_RELEASED && this.points[i].distance(mouseX, mouseY) <= this.select_radius) {
					this.line.children[1] = this.points[i];
					STATEMACHINE.change("add_lines");
				}
			}
			if (MOUSE_RELEASED && !this.closeToOtherPoint(mouseX,mouseY,this.select_radius)) {
				CONSTRUCTIONS.push(this.line.children[1]);
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
