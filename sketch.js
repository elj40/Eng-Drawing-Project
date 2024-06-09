var MOUSE_PRESSED, MOUSE_RELEASED, PRESSED_KEYS;	//Making clicks and keypresses global
var STATEMACHINE;
var CONSTRUCTIONS;

MOUSE_PRESSED = false;
MOUSE_RELEASED = false;
PRESSED_KEYS = {};

STATEMACHINE = new StateManager();

CONSTRUCTIONS = [];
TO_DELETE = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight-4);
}

function setup(){
	const canvas = createCanvas(windowWidth, windowHeight-4);
	canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault())
	STATEMACHINE.add("add_points", new AddPointsState());
	STATEMACHINE.add("move_point", new MovePointState());
	STATEMACHINE.change("add_points", {constructions: CONSTRUCTIONS});
}

function draw() {
	background(255, 240, 220);
	
	STATEMACHINE.update();
	STATEMACHINE.display();
	
	for (let i = 0; i < CONSTRUCTIONS.length; i++) {
		CONSTRUCTIONS[i].display();
	}
	
	for (let i = CONSTRUCTIONS.length-1; i>=0; i--) {
		for (let c of TO_DELETE) {
			if (c == CONSTRUCTIONS[i]) CONSTRUCTIONS.splice(i,1);
		}
	}
	
	MOUSE_PRESSED = false;
	MOUSE_RELEASED = false;
	RIGHT_MOUSE_PRESSED = false;
	RIGHT_MOUSE_RELEASED = false;
	PRESSED_KEYS = {};
}

function mousePressed(evt) {
	
	if (mouseButton === LEFT) MOUSE_PRESSED = true;
	if (mouseButton === RIGHT) {
		evt.preventDefault();
		RIGHT_MOUSE_PRESSED = true;
	}
}
function mouseReleased() {
	if (mouseButton === LEFT) MOUSE_RELEASED = true;
	if (mouseButton === RIGHT) RIGHT_MOUSE_RELEASED = true;
}
function keyPressed() {
	PRESSED_KEYS[key] = true;
}
