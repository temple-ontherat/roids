let roids=[];
let shot=[];
let u;
function setup() {
  createCanvas(1500, 700);
  angleMode(DEGREES);
  tri=new Ship();
  bults=0;
  u=0;
  amt=5;
  makeRoids();
//   for (i=0; i<bults; i++) {
//     shot[i]=new Shot();
//   }
}
function draw() {
  background(220);
  if (roids.length===0){
    makeRoids();
  //  break;

   }
  for (roid in roids) {
    
    roids[roid].show();
    roids[roid].update();
    roids[roid].edges();

  }
  checkShotCrash();
  if (keyIsDown(DOWN_ARROW)) {
 //  let thrust=createVector(0, -0.2)
   tri.applyForce();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    u+=4;
  }
  if (keyIsDown(LEFT_ARROW)) {
    u-=4;
  }
  // if (keyIsDown(UP_ARROW)) {
  //  // ang=u;
  //   blast();
    
      
  //     if (shot.length<6) {
  //     //  shot.shift();
  //       shot.push(new Shot);
  //     }
  //     else {
  //       shot.shift();
  //     }
     
  //   }
    
    
  
  tri.update();
  tri.edges();
  tri.show();
  
    for (i=0; i<shot.length; i++) {
        shot[i].show();
        shot[i].update();
      if ((shot[i].pos.x<0) || (shot[i].pos.x>width) || (shot[i].pos.y<0) ||
      (shot[i].pos.y>height)) {
        shot.splice(i,1);
      }
    
        }
  
 // console.log(shot.length);
  // if (shot.length>16) {
  //   shot.shift();
  // }
}
function keyPressed() {
   if (keyCode === UP_ARROW) {
    blast();
   }
}

class Ship {
  constructor() {
    this.pos=createVector(width/2,height/2);
    this.vel=createVector(0,0);
  
        //Ship
  }
  applyForce() {
  //  this.thrust=0;
    this.angle=(u*PI/180)-PI/2;
    this.thrust=p5.Vector.fromAngle(this.angle);
    this.thrust.mult(0.30);
    this.vel.add(this.thrust);
  }
  update() {
    this.pos.add(this.vel);
    this.vel.mult(0.97);
        //Ship
  }
  show() {
   push();
   translate(this.pos.x,this.pos.y); 
   rotate(u);
   triangle(0,-25,20,25,-20,25); 
   pop();
 //   console.log(u);
  }      //Ship
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
    }   
  }
  
}
class Shot {
    constructor(){
    this.radius=2;
    this.bults=0;
    this.pos=createVector(tri.pos.x,tri.pos.y);
    this.vel=createVector(0,0);
    this.angle=(ang*PI/180)-PI/2;
    this.thrust=p5.Vector.fromAngle(this.angle);
    this.thrust.normalize();
    this.vel=this.thrust.copy();
    this.vel.setMag(7);
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
  //   push();
 //   translate(tri.pos.x,tri.pos.y)   
    ellipse(this.pos.x,this.pos.y, this.radius*2);
 //   pop();
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
class Roid {
  constructor(){
    this.radius=40;
    this.pos=createVector(random(0,width),random(0,height))
    this.vel=createVector(random(-5,5),random(-5,5));
    this.vel.mult(0.30);
  }   //Roid
  update(){
    this.pos.add(this.vel);
  //  this.vel.mult(0.95);

  }
  show() {
    ellipse(this.pos.x,this.pos.y,this.radius*2);
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
function blast() {
  ang=u;
  
  shot.push(new Shot);
//  console.log(shot.length);
  // if (shot.length>10) {
  //   shot=[];
  // }
//  return;
}
function checkShotCrash() {
  for(i=0; i<shot.length; i++) {
   for(j=0; j<roids.length; j++) {
   
  //   distance=p5.Vector.dist(shot[i].pos,roids[j].pos);
     if (shot[i].pos.dist(roids[j].pos)<42) {
       roids.splice(j,1);    
       shot.splice(i,1);
       break;
     }
    console.log(shot[i].pos.dist(roids[j].pos),i,j);
   }
  }
 
}
function makeRoids() {
  for (i=0; i<amt; i++) {
  roids[i]=new Roid();
 }
}