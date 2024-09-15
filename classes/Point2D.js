class Point2D extends Construction {
	constructor(x,y, p) {
		super(p);
		this.x = x;
		this.y = y;
		this.name = ""
	}
	update() {
	}
	display() {
		push();
		fill(0);
		strokeWeight(1);
		circle(this.x, this.y, this.weight);
		pop();
	}
	highlight() {
		push();
		noFill();
		stroke(CYAN);
		strokeWeight(4);
		circle(this.x,this.y, this.weight+2);
		pop();
	}
	
	distance(x,y) {
		return hypoteneuse(x,y,this.x,this.y);
	}
}
	