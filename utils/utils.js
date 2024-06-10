function hypoteneuse(x1,y1,x2,y2) {
	let dx, dy;
	dx = x1-x2;
	dy = y1-y2;
	d = sqrt(dx*dx + dy*dy);
	return d;
}

function pointsFromConstructions(cnstr) {
	let points = [];
	for (let c of cnstr) {
		if (c instanceof Point2D) points.push(c);
	}
	return points;
}

function linesFromConstructions(cnstr) {
	let lines = [];
	for (let c of cnstr) {
		if (c instanceof Line2D) points.push(c);
	}
	return lines;
}