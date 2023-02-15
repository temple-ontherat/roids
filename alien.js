class Alien {
    constructor(w,h) {
    this.width=w;
    this.height=h;
    this.pos= createVector(random(0,width),10);
    this.vel= createVector(random(-5,5),random(0,5));
    }
    update() {
    this.pos.add(this.vel);
    }
    show() {
    push();
    ellipse(this.pos.x,this.pos.y,this.width,this.height);
    pop();
    }
    edges() {
        if (this.pos.x<0) {
            this.pos.x=width;
            return true;
        }
        if (this.pos.y<0) {
            this.pos.y=height;
            return true;

        }
        if (this.pos.x>width) {
            this.pos.x=0;
            return true;
        }
        if (this.pos.y>height) {
            this.pos.y=0;
            return true;
        }
        else {return false}
    }   
}

