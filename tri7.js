class Ship {
    constructor() {
      this.pt=[];
      this.pte=[];
      this.i=0;
      this.pos=createVector(width/2,height/2);
      this.thing=createVector(width/2,height/2);
      this.vel=createVector(0,0);
      this.pt[0]=createVector(0,-25);
      this.pt[1]=createVector(5,-12.5);
      this.pt[2]=createVector(10,0);
      this.pt[3]=createVector(15,12.5);
      this.pt[4]=createVector(20,25);
      this.pt[5]=createVector(10,25);
      this.pt[6]=createVector(0,25);
      this.pt[7]=createVector(-10,25);
      this.pt[8]=createVector(-20,25);
      this.pt[9]=createVector(-15,12.5);
      this.pt[10]=createVector(-10,0);
      this.pt[11]=createVector(-5,-12.5);
      this.pt[12]=createVector(0,0);
      this.color=255;
    }
    applyForce() {
      this.angle=(u*PI/180)-PI/2;
      this.thrust=p5.Vector.fromAngle(this.angle);
      this.thrust.mult(0.30);
      this.vel.add(this.thrust);
    }
    rotateRight() {
        u=u+rot;
        for (i=0; i<13; i++) {
        this.pt[i].rotate(rot);
        }
      }
      rotateLeft() {
        u=u-rot;
        for (i=0; i<13; i++) {
        this.pt[i].rotate(-rot); 
        }   
      }
    update() {
      this.pos.add(this.vel);  
      this.vel.mult(0.97);
    }
    show() {
     push();   
       translate(this.pos.x,this.pos.y);
     fill(this.color);

     beginShape();
     vertex(this.pt[0].x,this.pt[0].y);
     vertex(this.pt[1].x,this.pt[1].y);
     vertex(this.pt[2].x,this.pt[2].y);
     vertex(this.pt[3].x,this.pt[3].y);
     vertex(this.pt[4].x,this.pt[4].y);
     vertex(this.pt[5].x,this.pt[5].y);
     vertex(this.pt[6].x,this.pt[6].y);
     vertex(this.pt[7].x,this.pt[7].y);
     vertex(this.pt[8].x,this.pt[8].y);
     vertex(this.pt[9].x,this.pt[9].y);
     vertex(this.pt[10].x,this.pt[10].y);
     vertex(this.pt[11].x,this.pt[11].y);
     endShape(CLOSE);
     
     pop(); 
     if (!crash) {
     push();
     translate(this.pos.x,this.pos.y);
     rotate(u);
     imageMode(CENTER);
     image(image3,0,0,50,60);
     pop();  // to make color transform unique
    }
    }      
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
