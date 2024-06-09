class Point2D extends Construction {
	constructor(x,y) {
		super();
		this.x = x;
		this.y = y;
		this.r = 8;
		this.name = ""
	}
	update() {
	}
	display() {
		push();
		fill(0);
		circle(this.x, this.y, this.r);
		pop();
	}
	highlight() {
		push();
		noFill();
		stroke(0, 255, 255);
		strokeWeight(4);
		circle(this.x,this.y, this.r+2);
		pop();
	}
}
	