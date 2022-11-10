

let roids=[];
let incx,incy;
let a=0;
let triPosx;
let triPosy;
let rotAngle=0;
let triVecPos;
let triVecPos2;
let triVecPos3;
let triVecVel;
let ammoVecPos;
let ammoPosx, ammoPosy;
let triVecPosCopy;
//let shot=False;

function setup() {
    createCanvas(1400, 600);
    angleMode(DEGREES);
    roids[0]=new Roid(100,100,[],random(-4,4),random(-4,4),20);
    roids[1]=new Roid(300,100,[],random(-4,4),random(-4,4),15);
    roids[2]=new Roid(500,100,[],random(-4,4),random(-4,4),10);
    roids[3]=new Roid(100,250,[],random(-4,4),random(-4,4),22);
    roids[4]=new Roid(300,250,[],random(-4,4),random(-4,4),17);
    roids[5]=new Roid(500,250,[],random(-4,4),random(-4,4),14);
    triPosx=width/2;
    triPosy=height/2;
    triVecPos= createVector(0,-25);
    triVecPos2= createVector(20,25);
    triVecPos3= createVector(-20,25);
    triVecVel= createVector(0,0);
p=createP('This works best on a laptop. Use the arrows to make the ship do various things. Still have to give ship and shots some physics, add collision detection for ship-to-astroid and shot-to-astroid, and then add the alien ship; maybe a pilot jumps out of the ship and is able to jump from astroid to astroid, continuing to shoot up roids and alien ships-- sort of an astroids/frogger combo? Practically all of this is thanks to Daniel Shiffman.')
  }
let x=0;
let y=0;
let q=0;
msecs=0;
//startx=0,starty=0;
//stop=0;
function draw() {
    
    background(220);
    for (let i=0;i<roids.length;i++) {   
    roids[i].bubble();
    roids[i].move();    
    roids[i].border();
    }  
    if (keyIsDown(LEFT_ARROW)) {
        left();     
    } if (keyIsDown(RIGHT_ARROW)) {
      right();
    }
   if (keyIsDown(UP_ARROW)) {
    up();    
  }
    if (keyIsDown(DOWN_ARROW)) {
      down();
    }
    // else if (keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)) {
    //     up();
    //     right();
    // }
function left() {
    triVecPos.rotate(-4);
    triVecPos2.rotate(-4);
    triVecPos3.rotate(-4);    
}
function right() {
    triVecPos.rotate(4);
    triVecPos2.rotate(4);
    triVecPos3.rotate(4);
}
function up() {
    ammoPosx=triPosx;
    ammoPosy=triPosy;

    for (let i=1; i<10;i++){
      triVecPosCopy=triVecPos.copy();
      triVecPosCopy.normalize();

      triVecPosCopy.mult(i); 
      push();

      translate(ammoPosx,ammoPosy);
  fill(255);
    ellipse(triVecPosCopy.x,triVecPosCopy.y,4);
    pop();

    ammoPosy=ammoPosy+ 3*(triVecPosCopy.y);   
    ammoPosx=ammoPosx+ 3*(triVecPosCopy.x); 
    }
    }
 
function down() {
    triVecPosCopy=triVecPos.copy();
    triVecPos2Copy=triVecPos2.copy();
    triVecPos3Copy=triVecPos3.copy();
    triVecPosCopy.normalize();
    triVecPos2Copy.normalize();
    triVecPos3Copy.normalize();
    triPosy=triPosy+ 3*(triVecPosCopy.y);
    triPosx=triPosx+ 3*(triVecPosCopy.x);    }
  translate(triPosx,triPosy);
  fill(255);
  triangle(triVecPos.x,triVecPos.y,triVecPos2.x,triVecPos2.y,triVecPos3.x,triVecPos3.y)  
 }    
let r=0;
let p=[];
let t=[];
let v;
let l;





