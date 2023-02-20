class Alien {
    constructor(w,h) {
    this.width=w;
    this.height=h;
    this.radius=(this.width+this.height)/2
    this.pos= createVector(random(0,width),10);
    this.vel= createVector(random(-5,5),random(0,5));
    this.vel.normalize();
    this.vel.mult(4);
    this.colorR=255;
    this.colorB=255;
    this.colorC=255;
    this.alf=255;
    }
    update() {
    this.pos.add(this.vel);
    }
    show() {
    push();
   // fill('rgba(this.color,this.alf)');
   // colorMode(RGB);
    // fill((this.color,this.alf));
    noStroke();
    fill(this.colorR,this.colorB,this.colorC,this.alf);
    ellipse(this.pos.x,this.pos.y,this.width,this.height);
    imageMode(CENTER);
    image(image4,this.pos.x,this.pos.y,this.width,this.height);
    //line(this.pos.x,this.pos.y,tri.pos.x,tri.pos.y);
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

