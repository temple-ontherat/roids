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
    this.colorG=255;
    this.colorB=255;
    this.colorR2=0;
    this.colorG2=0;
    this.colorB2=0;
    this.alf=255;
    this.alf2=255;
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
    // fill(this.colorR,this.colorG,this.colorB,this.alf);
   
    fill(this.colorR,this.colorG,this.colorB,this.alf);

    ellipse(this.pos.x,this.pos.y,this.width,this.height);
    // fill(this.colorR2,this.colorB2,this.colorB2,this.alf2);
    // ellipse(this.pos.x,this.pos.y,this.width-15,this.height-10);
    imageMode(CENTER);
    tint(this.colorR,this.colorG,this.colorB,this.alf);
    image(image5,this.pos.x,this.pos.y,this.width+30,this.height+20);
    // image(image4,this.pos.x,this.pos.y,this.width,this.height);

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

