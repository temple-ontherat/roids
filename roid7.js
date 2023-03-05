class Roid {
  constructor(rad,x,y){
    this.radius=rad;
    this.x=x;
    this.y=y;
    this.pos=createVector(random(0,width),random(0,height));
    this.vel=createVector(random(-5,5),random(-5,5));
    this.vel.mult(0.5);
    if (this.x) {
      this.pos.x=this.x;
    }
    if (this.y) {
      this.pos.y=this.y;
    }
    if (this.radius==10) {
      this.vel.mult(1.5);
    }
  }   //Roid
  update(){
    this.pos.add(this.vel);
  }
  show() {
    push();
    translate(this.pos.x,this.pos.y);
    fill('white');
    ellipse(0,0,this.radius*2);
     imageMode(CENTER);
     image(image1,0,0,this.radius*2+5,this.radius*2+5);
     fill(255);
     stroke(27);
     textSize(40);
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
