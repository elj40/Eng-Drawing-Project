class Construction {
	constructor(p = null) {
		this.parents = [];
		this.children = []

		this.weight = 4;

		if (p) this.parents.push(p);
	}
	update() {}
	display() {}
	destroy() {
		TO_DELETE.push(this);

		// Destroy any children that only have this element has a parent
		for (let c of this.children) {
			if (c.parents.length <= 1)  {
				c.destroy();
			}
		}

	}
}
