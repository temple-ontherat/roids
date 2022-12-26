class Roid {
  constructor(rad,x,y){
    this.radius=rad;
    this.x=x;
    this.y=y;
    this.pos=createVector(random(0,width/4),random(0,height/4))
    this.vel=createVector(random(-5,5),random(-5,5));
    this.vel.mult(0.5);
    if (this.x) {
      this.pos.x=this.x;
    }
    if (this.y) {
      this.pos.y=this.y;
    }
  }   //Roid
  update(){
    this.pos.add(this.vel);
  //  this.vel.mult(0.95);

  }
  show() {
    push();
    translate(this.pos.x,this.pos.y);
    fill('white');
    ellipse(0,0,this.radius*2);
    pop();
  }   //Roid
  edges() {
    if (this.pos.x < 0) {
      this.pos.x=width;
    }
    if (this.pos.x > width) {
      this.pos.x=0;
    }
    if (this.pos.y < 0) {
      this.pos.y=height;
    }
    if (this.pos.y > height) {
      this.pos.y=0;
    }   //Roid
    
  }    
}