let roid1;
let roid2;
let roid3;
let roid4;
let roid5;
let roid6;
let incx,incy;
let a=0;
function setup() {
    createCanvas(700, 500);
    angleMode(DEGREES);
    roid1=new Roid(100,100,[],random(-4,4),random(-4,4),20);
    roid2=new Roid(300,100,[],random(-4,4),random(-4,4),20);
    roid3=new Roid(500,100,[],random(-4,4),random(-4,4),20);
    roid4=new Roid(100,250,[],random(-4,4),random(-4,4),20);
    roid5=new Roid(300,250,[],random(-4,4),random(-4,4),20);
    roid6=new Roid(500,250,[],random(-4,4),random(-4,4),20);


  }
let x=0;
let y=0;
let q=0;
msecs=0;
//startx=0,starty=0;
//stop=0;
function draw() {
    
    background(220);
    // if (stop==1000) {
    //     noLoop();
    // }   
    roid1.bubble();
      roid1.move();    
    roid1.border();

    roid2.bubble();
      roid2.move();
    roid2.border();

    roid3.bubble();
      roid3.move();
    roid3.border();

    roid4.bubble();
      roid4.move();    
    roid4.border();

    roid5.bubble();
      roid5.move();    
    roid5.border();

    roid6.bubble();
    roid6.move();     
    roid6.border();
    triangle(width/2,height/2,(width/2)+20,(height/2)+50,(width/2)-20,(height/2)+50);

  }
let r=0;
let p=[];
let t=[];
let v;
let l;
let s=10, w=490;
peep="";
peep1="";

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
      this.p[x]=random(2*this.a,3*this.a);
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
      this.t[z].normalize();
      this.t[z].mult(this.p[z]);
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
    if (this.startx>width) {
        this.startx=0;
      }
    if (this.startx<0) {
        this.startx=width;
    }
      if (this.starty>height) {
        this.starty=0;
      }
    if (this.starty<0) {
        this.starty=height;
}
}
}
