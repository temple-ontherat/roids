class Shot2 {
    constructor(){
    this.radius=2;
    this.pos=createVector(alien.pos.x,alien.pos.y);

    this.vel=p5.Vector.sub(tri.pos,this.pos);
    this.vel=this.vel.normalize();
  //this.vel.mult(4); // original
    this.vel.mult(deltaTime/6);//test    
   // Shot 
    }         
    update(){      //Shot
    this.pos.add(this.vel);
  //  this.vel.mult(1.08); 
    
    } 
    show(){    //Shot
     push();
    translate(this.pos.x,this.pos.y);
    noStroke();   
    ellipse(0,0, this.radius*3);
    pop();
    } 
}
