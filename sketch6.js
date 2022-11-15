let num=0;
let shot;
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
let triVecVel2;
let triVecVel3;
let triVecAcc;
let triVecAcc2;
let triVecAcc3;
let shotVecPos;
let shotVecVel;
let shotVecAcc;
let ammoPosx, ammoPosy;
let triVecPosCopy;
let triVecVelCopy;
let transVec;
let f=0;
let rotat=6;
let ink;
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
    triVecVel2= createVector(0,0);
    triVecVel3= createVector(0,0);
    triVecAcc= createVector(0,0);
    triVecAcc2= createVector(0,0);
    triVecAcc3= createVector(0,0);
    shotVecPos=createVector(0,0);
    shotVecAcc=createVector(0,0);
    shotVecVel=createVector(0,0);
    ink=createVector(0,0);
    transVec=createVector(triPosx,triPosy);
    triVecVelCopy=createVector(0,0);
    trix=createVector(0,0);
p=createP('This works best on a laptop. Use the arrows keys to control ship.')
  }
let x=0;
let y=0;
let q=0;
msecs=0;
function draw() { 
    background(220);
    for (let i=0;i<roids.length;i++) {   
    roids[i].bubble();
    roids[i].move();    
    roids[i].border();
    // shotVecPos=triVecPos.copy();
    // shotVecVel=triVecPos.copy();
    // shotVecAcc=triVecPos.copy();
    //  shotVecVel.setMag(12);
    //  shotVecVel.setMag(-.1);
    }  
    if (keyIsDown(LEFT_ARROW)) {
        left();     
    } if (keyIsDown(RIGHT_ARROW)) {
      right();
    }
   if (keyIsDown(UP_ARROW)) {
    
    shoot();
    
    // if (num = 0) {
    // shotVecPos=triVecPos.copy();
    // shotVecVel=triVecPos.copy();
    // shotVecAcc=triVecPos.copy();
    // shotVecVel.setMag(12);
    // shotVecAcc.setMag(-.1);
    // }
    // shoot();
    // num+=1;     
    }
    if (!keyIsDown(UP_ARROW)) {
      ink=createVector(0,0);
    }
    if (keyIsDown(DOWN_ARROW)) {
      
      down();
    }
    if (!keyIsDown(DOWN_ARROW) && (triVecVel.mag()>1)) {
      triVecAcc.setMag(0);
    // triVecVel=triVecVelCopy.copy();
      //f=0;
      update();  
    }
  edges(); 
  translate(transVec.x,transVec.y);
  fill(255);
  triangle(triVecPos.x,triVecPos.y,triVecPos2.x,triVecPos2.y,triVecPos3.x,triVecPos3.y)  
 }    
//let r=0;
let p=[];
let t=[];
let v;
let l;

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
  function left() {
    triVecPos.rotate(-rotat);
    triVecPos2.rotate(-rotat);
    triVecPos3.rotate(-rotat);    
}
function right() {
    triVecPos.rotate(rotat);
    triVecPos2.rotate(rotat);
    triVecPos3.rotate(rotat);
}
function down() {
   
  triVecAcc=triVecPos.copy();
 // triVecVel=triVecPos.copy();

  triVecAcc.setMag(.05);
 // triVecVel.limit(10); 
  triVecVel.add(triVecAcc);
  transVec.add(triVecVel);
  //f+=.002;
  }
function update() {
  //  if (triVecVel.mag()<3) {
  //   // 
  //    triVecAcc.setMag(-.2);
     
  //   // triVecAcc.setMag()
  //  }
    if ((triVecVel.mag()<2) && (triVecVel.mag()>-2))  {
     triVecAcc.setMag(0);
    }
    
  //  else {
  //   f-=.02
  //  }
    
  triVecAcc=triVecPos.copy();
 // triVecVel=triVecPos.copy();

  triVecAcc.setMag(-.0008); 
  triVecVel.add(triVecAcc);
 // triVecVel.limit(9)
  transVec.add(triVecVel);

 // triVecVelCopy=triVecVel.copy();
//  triVecAcc=triVecPos.copy();

  console.log(triVecVel.mag(),triVecAcc.mag())

}
function edges() {
  if (!keyIsDown(DOWN_ARROW)) {
    update();
  }
  if (transVec.x<0) {
    transVec.set(width,transVec.y);
  }
  else if (transVec.y<0) {
    transVec.set(transVec.x,height);
  }
  else if (transVec.x>width) {
    transVec.set(0,transVec.y);

  }
  else if (transVec.y>height) {
    transVec.set(transVec.x,0);

  }
}
function shoot() {
   // ink=ink.add(triVecPos);
    ink=ink.add(triVecPos);
    ink=ink.add(triVecPos);
    push();
    translate(transVec,transVec);
    fill(0);
    ellipse(ink.x,ink.y,5);
    pop();
}


