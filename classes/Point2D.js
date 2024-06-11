class Point2D extends Construction {
	constructor(x,y, p) {
		super(p);
		this.x = x;
		this.y = y;
		this.r = 6;
		this.name = ""
	}
	update() {
	}
	display() {
		push();
		fill(0);
		strokeWeight(1);
		circle(this.x, this.y, this.r);
		pop();
	}
	highlight() {
		push();
		noFill();
		stroke(CYAN);
		strokeWeight(4);
		circle(this.x,this.y, this.r+2);
		pop();
	}
	
	distance(x,y) {
		return hypoteneuse(x,y,this.x,this.y);
	}
}
	