class Shot {
    constructor(){
    this.radius=2;
    this.bults=0;
    this.pos=createVector(tri.pos.x+tri.pt[0].x,tri.pos.y+tri.pt[0].y) ;    
    //this.pos=createVector(tri.pos.x,tri.pos.y);
    //this.pos=createVector(tri.pt[0].x+750,tri.pt[0].y+350);
    this.vel=createVector(0,0);
    this.angle=(ang*PI/180)-PI/2;
    this.thrust=p5.Vector.fromAngle(this.angle);
    this.thrust.normalize();
    this.vel=this.thrust.copy();
    //this.vel.setMag(7); //original
    this.vel.setMag(deltaTime/2); //test   
   // Shot 
    }
    // applyForce(inc) {  //Shot
    //     //  this.thrust=0;
    //       this.inc=inc;
    //       this.angle=(u*PI/180)-PI/2;
    //       this.thrust=p5.Vector.fromAngle(this.angle);
    //       this.thrust.normalize();
    //       this.vel=this.thrust.copy();
    //       this.vel.mult(this.inc);
    //   //    this.vel.setMag(this.inc);
    // }         
    update(){      //Shot
    this.pos.add(this.vel);
  //  this.vel.mult(1.08); 
    
    } 
    show(){    //Shot
     push();
    translate(this.pos.x,this.pos.y)   
    ellipse(0,0, this.radius*3);
    pop();
   // this.inc++;     
    } 
  // edges() {
  //   if (this.pos.x < 0) {
  //     this.pos.x=width;
  //   }
  //   if (this.pos.x > width) {
  //     this.pos.x=0;
  //   }
  //   if (this.pos.y < 0) {
  //     this.pos.y=height;
  //   }
  //   if (this.pos.y > height) {
  //     this.pos.y=0;
  //   }   
  // } 
}
