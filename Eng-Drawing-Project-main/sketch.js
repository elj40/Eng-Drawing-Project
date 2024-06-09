var MOUSE_PRESSED, MOUSE_RELEASED, PRESSED_KEYS;	//Making clicks and keypresses global
var STATEMACHINE;
var CONSTRUCTIONS;

MOUSE_PRESSED = false;
MOUSE_RELEASED = false;
PRESSED_KEYS = {};

STATEMACHINE = new StateManager();

CONSTRUCTIONS = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight-4);
}

function setup(){
	createCanvas(windowWidth, windowHeight-4);
	STATEMACHINE.add("add_points", new AddPointsState());
	STATEMACHINE.change("add_points", {constructions: CONSTRUCTIONS});
}

function draw() {
	background(255, 240, 220);
	
	STATEMACHINE.update();
	STATEMACHINE.display();
	
	for (let i = 0; i < CONSTRUCTIONS.length; i++) {
		CONSTRUCTIONS[i].display();
	}
	
	MOUSE_PRESSED = false;
	MOUSE_RELEASED = false;
	PRESSED_KEYS = {};
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
