function distance(x1,y1,x2,y2) {
	let dx, dy;
	dx = x1-x2;
	dy = y1-y2;
	d = sqrt(dx*dx + dy*dy);
	return d;
}