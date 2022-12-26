class Ship {
    constructor() {
      this.pt=[];
      this.pte=[];
      this.i=0;
      this.pos=createVector(width/2,height/2);
      transMag=this.pos.mag();
      this.thing=createVector(width/2,height/2);
    //  this.pos=createVector(0,0);
      this.vel=createVector(0,0);
      // this.pt[0]=createVector(this.pos.x,this.pos.y-25);
      // this.pt[1]=createVector(this.pos.x+5,this.pos.y-12.5);
      // this.pt[2]=createVector(this.pos.x+10,this.pos.y);
      // this.pt[3]=createVector(this.pos.x+15,this.pos.y+12.5);
      // this.pt[4]=createVector(this.pos.x+20,this.pos.y+25);
      // this.pt[5]=createVector(this.pos.x+10,this.pos.y+25);
      // this.pt[6]=createVector(this.pos.x,this.pos.y+25);
      // this.pt[7]=createVector(this.pos.x-10,this.pos.y+25);
      // this.pt[8]=createVector(this.pos.x-20,this.pos.y+25);
      // this.pt[9]=createVector(this.pos.x-15,this.pos.y+12.5);
      // this.pt[10]=createVector(this.pos.x-10,this.pos.y);
      // this.pt[11]=createVector(this.pos.x-5,this.pos.y-12.5);
      // this.pt[12]=createVector(this.pos.x,this.pos.y);

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
    // this.pte[0]=createVector(width/2,height/2-25);
    //   this.pte[1]=createVector(width/2+5,height/2-12.5);
    //   this.pte[2]=createVector(width/2+10,height/2);
    //   this.pte[3]=createVector(width/2+15,height/2+12.5);
    //   this.pte[4]=createVector(width/2+20,height/2+25);
    //   this.pte[5]=createVector(width/2+10,height/2+25);
    //   this.pte[6]=createVector(width/2,height/2+25);
    //   this.pte[7]=createVector(width/2-10,height/2+25);
    //   this.pte[8]=createVector(width/2-20,height/2+25);
    //   this.pte[9]=createVector(width/2-15,height/2+12.5);
    //   this.pte[10]=createVector(width/2-10,height/2);
    //   this.pte[11]=createVector(width/2-5,height/2-12.5);
    //   this.pte[12]=createVector(width/2,height/2);
     
      this.color=255;
          //Ship
    }
    applyForce() {
      
      this.angle=(u*PI/180)-PI/2;
      this.thrust=p5.Vector.fromAngle(this.angle);
      this.thrust.mult(0.30);
      this.vel.add(this.thrust);
   
    }
    rotateRight() {
        u=u+rot;
     //   push();
     //   translate(tri.pos.x,tri.pos.y);
     //   translate(this.pos.x,this.pos.y);
        for (i=0; i<13; i++) {
        this.pt[i].rotate(rot);
        }
        
     //   pop();
      }
      rotateLeft() {
        u=u-rot;
      //  push();
     //   translate(tri.pos.x,tri.pos.y);
     //   translate(this.pos.x,this.pos.y);
        for (i=0; i<13; i++) {
        this.pt[i].rotate(-rot); 
      
  
        }
       
      
      }
    update() {
   //   this.angle=(u*PI/180)-PI/2;

      this.pos.add(this.vel);

    //   this.pt[0].set(this.pos.x,this.pos.y-25);
    //   this.pt[1].set(this.pos.x+5,this.pos.y-12.5);
    //   this.pt[2].set(this.pos.x+10,this.pos.y);
    //   this.pt[3].set(this.pos.x+15,this.pos.y+12.5);
    //   this.pt[4].set(this.pos.x+20,this.pos.y+25);
    //   this.pt[5].set(this.pos.x+10,this.pos.y+25);
    //   this.pt[6].set(this.pos.x,this.pos.y+25);
    //   this.pt[7].set(this.pos.x-10,this.pos.y+25);
    //   this.pt[8].set(this.pos.x-20,this.pos.y+25);
    //   this.pt[9].set(this.pos.x-15,this.pos.y+12.5);
    //   this.pt[10].set(this.pos.x-10,this.pos.y);
    //   this.pt[11].set(this.pos.x-5,this.pos.y-12.5);
    //   for (i=0; i<13; i++) {
    //    this.pt[i].add(this.vel);
    //  //  this.pt[i].add(this.temp);

    // }
         
      
   
      this.vel.mult(0.97);
          //Ship
    }
    show() {
     push();   // to make color transform unique
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

    // triangle(0,-25,20,25,-20,25);
   //  triangle(this.pt[0].x,this.pt[0].y,this.pt[4].x,this.pt[4].y,this.pt[8].x,this.pt[8].y);
    //  for (i=0; i<13; i++) {
    //   point(this.pt[i].x,this.pt[i].y);
    //  }


    //  line(0,0,this.pt[0].x,this.pt[0].y);
    //  line(0,0,this.pt[4].x,this.pt[4].y);
    //  line(0,0,this.pt[8].x,this.pt[8].y);

    //  beginShape();
    //  vertex(this.pt[0].x,this.pt[0].y);
    //  vertex(this.pt[4].x,this.pt[4].y); 
    //  vertex(this.pt[8].x,this.pt[8].y); 
    //  endShape();
     pop();   // to make color transform unique
    //  console.log(u);
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
  //     for (i=0; i<12; i++) {
  //       if (this.pt[i].x<0) {
  //         this.pt[i].x=width;
  //       }
  //       if (this.pt[i].y<0) {
  //         this.pt[i].y=height;
  //     }
  //       if (this.pt[i].x>width) {
  //       this.pt[i].x=0;
  //     }
  //       if (this.pt[i].y>height) {
  //       this.pt[i].y=0;
  //   }
  // }
   }
  }