var MOUSE_PRESSED, MOUSE_RELEASED, PRESSED_KEYS;

MOUSE_PRESSED = false;
MOUSE_RELEASED = false;
PRESSED_KEYS = {};

points = [];
select_radius = 10;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight-4);
}

function setup(){
	createCanvas(windowWidth, windowHeight-4);
}

function draw() {
	background(255, 240, 220);
	
	//UPDATE
	for (let i = 0; i < points.length; i++) {
		points[i].update();
		//implement this once statemachine has been built
		if (MOUSE_PRESSED && distance(mouseX, mouseY,points[i].x,points[i].y) <= select_radius) changeState("move_point", {});
	}
	if (MOUSE_RELEASED && !closeToOtherPoint(mouseX,mouseY,select_radius)) {
		points.push(new Point2D(mouseX, mouseY));
	}
	
	
	MOUSE_PRESSED = false;
	MOUSE_RELEASED = false;
	PRESSED_KEYS = {};
	
	//DRAW
	for (let i = 0; i < points.length; i++) {
		points[i].display()
		if (distance(mouseX, mouseY,points[i].x,points[i].y) <= select_radius) points[i].highlight();
	}
}

function closeToOtherPoint(x,y,r) {
	for (let p of points) {
		dist_ = distance(x,y,p.x,p.y);
		if (dist_ <= r) return true;
		
	}
	
	return false;
}

function changeState(s, options) {}

function distance(x1,y1,x2,y2) {
	let dx, dy;
	dx = x1-x2;
	dy = y1-y2;
	d = sqrt(dx*dx + dy*dy);
	return d;
}

function mousePressed() {
	MOUSE_PRESSED = true;
}
function mouseReleased() {
	MOUSE_RELEASED = true;
}
function keyPressed() {
	PRESSED_KEYS[key] = true;
}
