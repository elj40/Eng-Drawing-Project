class NormalState extends BaseState {
	constructor() {
		super("normal");
		this.select_radius = 10;
		this.lines = [];
		this.points = [];
	}
	
	enter(o) {
		
	}
	
	update() {
		if (PRESSED_KEYS['q']) STATEMACHINE.change('add_points');
		else if (PRESSED_KEYS['w']) STATEMACHINE.change('add_lines');
		
		for (let i = 0; i < CONSTRUCTIONS.length; i++) {
			CONSTRUCTIONS[i].update();
			if (MOUSE_PRESSED && CONSTRUCTIONS[i].distance(mouseX, mouseY) <= this.select_radius) this.enter_edit_mode(CONSTRUCTIONS[i]);
		}
	}
	display() {
		for (let i = 0; i < CONSTRUCTIONS.length; i++) {
			if (CONSTRUCTIONS[i].distance(mouseX, mouseY) <= this.select_radius) CONSTRUCTIONS[i].highlight();
		}
	}
	
	enter_edit_mode(c) {
		if (c instanceof Point2D) STATEMACHINE.change("move_point", {selected: c, previousState: this.name});
		else if (c instanceof Line2D) STATEMACHINE.change("edit_line", {selected: c, previousState: this.name});
	}
}