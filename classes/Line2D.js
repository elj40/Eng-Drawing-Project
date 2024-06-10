class Line2D extends Construction {
	constructor(A, B) {
		super();
		this.pointA = A;
		this.pointB = B;
		this.thickness = 4;
	}
	
	update() {}
	display() {
		push()
		strokeWeight(this.thickness);
		this.pointA.display();
		this.pointB.display();
		line(this.pointA.x,this.pointA.y,this.pointB.x,this.pointB.y);
		pop();
	}
	highlight() {
		push()
		stroke(CYAN);
		strokeWeight(this.thickness+2);
		line(this.pointA.x,this.pointA.y,this.pointB.x,this.pointB.y);
		this.display();
		pop();
	}
	distance(x,y) {
		let a,b,d;
		a = hypoteneuse(x,y,this.pointA.x,this.pointA.y)
		b = hypoteneuse(x,y,this.pointB.x,this.pointB.y)
		d = hypoteneuse(this.pointA.x,this.pointA.y,this.pointB.x,this.pointB.y)
		
		return a+b-d;
	}
}