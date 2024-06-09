class AddLineState extends BaseState {
	constructor() {
		super("add_line");
		this.points = [];
	}
	enter(options) {
		this.points = [];
		this.points = this.pointsFromConstructions(CONSTRUCTIONS);
	}
	update() {
		
	}
}