class Line2D extends Construction {
	constructor(A, B) {
		super();
		if (A && B) {
			this.children.push(A);
			this.children.push(B);
		}else {
			console.log('Line created without children, add points later');
		}
	}
	
	update() {}
	display() {
		push()
		strokeWeight(this.weight);
		this.children[0].display();
		this.children[1].display();
		line(this.children[0].x,this.children[0].y,this.children[1].x,this.children[1].y);
		pop();
	}
	highlight() {
		push()
		stroke(CYAN);
		strokeWeight(this.weight+2);
		line(this.children[0].x,this.children[0].y,this.children[1].x,this.children[1].y);
		this.display();
		pop();
	}
	distance(x,y) {
		let a,b,d;
		a = hypoteneuse(x,y,this.children[0].x,this.children[0].y)
		b = hypoteneuse(x,y,this.children[1].x,this.children[1].y)
		d = hypoteneuse(this.children[0].x,this.children[0].y,this.children[1].x,this.children[1].y)
		
		return a+b-d;
	}
}
