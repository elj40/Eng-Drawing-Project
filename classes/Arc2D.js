class Arc2D extends Construction {
    constructor(center,master,slave) {
        super();
        if (center && master && slave) {
            this.children.push(center);
            this.children.push(master);
            this.children.push(slave);
        }
        else {
            console.log('Created arc without children, update later')
        }
    }
    display() {

        const c = this.children[0];
        const m = this.children[1];
        const s = this.children[2];
        const r = hypoteneuse(c.y,c.y,m.x,m.y);

        const dir_cm = atan2((m.x - c.x)/(m.y - c.y));
        const dir_cs = atan2((m.x - c.x)/(m.y - c.y));

        push()
        noFill();
        arc(c.x,c.y, r/2, r/2, dir_cm, dir_cs)
        pop()


    }
}