class Roid {
    constructor(startx,starty,p,incx,incy,a) {
          this.startx=startx;
          this.starty=starty;
          this.incx=incx;
          this.incy=incy;
          this.r=random(15,20);
          this.r=this.r.toFixed(0);
          this.p=p;
          this.l=l;
          this.t=t;
          this.v=v;
          this.a=a;
      
      for (let x=0; x<this.r; x++) {
      this.p[x]=random(2*a,3*a);
  }
              this.l=360/this.r;

    } 
  
// randomize() {for (let x=0; x<this.r; x++) {
//     this.p[x]=random(40,60);
//   }
//   this.ran=true;
//  // return p[4], p[5], p[6],p[7];
//   return this.p,this.r,this.ran;
//             }
bubble() {
    this.v = createVector(100, 100);
 
  //  this.l = 360 / this.r;
    push();
    translate(this.startx, this.starty);
    beginShape();  
    for (let z = 0; z < this.r; z++) {
      strokeWeight(1);
      this.t[z] = this.v.copy();
      this.t[z].rotate(this.l * z);
      // this.t[z].normalize();
      // this.t[z].mult(this.p[z]);
         this.t[z].setMag(this.p[z])
      vertex(this.t[z].x, this.t[z].y);
    }
    endShape(CLOSE);
  // this.peep1=createP(this.p);
  //       this.peep1.position(s,w);
  //     s+=50;w+=100;   
    pop();
    }   
move() {
    
 //   translate(this.startx,this.starty);
    this.startx+=this.incx;
    this.starty+=this.incy;
    
}
border() {
    if (this.startx>width+60) {
        this.startx=0;
      }
    if (this.startx<-60) {
        this.startx=width;
    }
      if (this.starty>height+60) {
        this.starty=0;
      }
    if (this.starty<-60) {
        this.starty=height;
}
}
}
