var MOUSE_PRESSED, MOUSE_RELEASED, PRESSED_KEYS;	//Making clicks and keypresses global
var STATEMACHINE;
var CONSTRUCTIONS;
var MODE_DISPLAY;
var CYAN;

MOUSE_PRESSED = false;
MOUSE_RELEASED = false;
PRESSED_KEYS = {};

STATEMACHINE = new StateManager();

CONSTRUCTIONS = [];
POINTS_ARR = [];
LINES_ARR = [];
ARCS_ARR = [];
TO_DELETE = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight-4);
}

function setup(){
	const canvas = createCanvas(windowWidth, windowHeight-4);
	canvas.elt.addEventListener("contextmenu", (e) => e.preventDefault())
	MODE_DISPLAY = document.getElementById("toolbar");
	
	STATEMACHINE.add("normal", new NormalState());
	STATEMACHINE.add("add_points", new AddPointsState());
	STATEMACHINE.add("add_lines", new AddLineState());
	STATEMACHINE.add("move_point", new MovePointState());
	STATEMACHINE.add("edit_line", new EditLineState());
	STATEMACHINE.change("normal");
	
	CYAN = color(0, 255, 255);
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
			if (c == CONSTRUCTIONS[i]) {
				CONSTRUCTIONS.splice(i,1);
			}
		}
	}
	
	MOUSE_PRESSED = false;
	MOUSE_RELEASED = false;
	RIGHT_MOUSE_PRESSED = false;
	RIGHT_MOUSE_RELEASED = false;
	PRESSED_KEYS = {};
	TO_DELETE = [];
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
