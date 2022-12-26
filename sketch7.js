let roids=[];
let shot=[];
let shotCount=0;
let crash=true;
let u;
let q;
let test=0;
let guys=[];
transMag=0;
let timex=0;
let score=0;
let timeStart=85;
function setup() {
  createCanvas(1500, 700);
  angleMode(DEGREES);
  tri=new Ship();
  bults=0;
  u=0;
  rot=5;
  roidAmt=15;
  startTime=Math.floor(millis()/1000);
  for (i=0; i<3; i++) {
    guys[i]=new Guys();

  }
 // makeRoids();
//   for (i=0; i<bults; i++) {
//     shot[i]=new Shot();
//   }
}
function draw() {
  background(220);
  for (roid in roids) {
    
    roids[roid].show();
    roids[roid].update();
    roids[roid].edges();
  }
  timex=timeStart-(Math.floor(millis()/1000)-startTime);
textSize(50);
if (timex<0) {
  background(0);
  fill('red');
  text("Time's up.",50,50);
  gameOver();
}
  else {text("Timer: "+timex,50,50)};
  text("Score: "+score,1200,50);
  // if ((roids.length==0) || (shotCount>30)){
  //   makeRoids();
  //   shotCount=0;
  // //  break;

  //  }
  if (roids.length==0){
    startTime=Math.floor(millis()/1000);
 //   timex=0;
    timeStart=timeStart-5;
    makeRoids(40);
  //  break;

   }
  
  q=0;
  for (guy in guys) {
    
    guys[guy].show(25*q+25,670);
    q++;
  }
 // console.log(tri.pos.x,tri.pos.y,tri.pt11.x,tri.pt11.y);
 // console.log(hello);
  checkShotCrash();
  checkShipCrash();
  //crashShip2();
  if (keyIsDown(UP_ARROW)) {
 //  let thrust=createVector(0, -0.2)
   tri.applyForce();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    tri.rotateRight();
  }
  if (keyIsDown(LEFT_ARROW)) {
    tri.rotateLeft();
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
    
    
  
  
//  console.log(tri.pos.x,tri.pos.y,tri.pt[0].x,tri.pt[0].y)
    for (i=0; i<shot.length; i++) {
        shot[i].show();
        shot[i].update();
      if ((shot.length>0) && (shot[i].pos.dist(tri.pos)>300)) {
        shot.splice(i,1);
      } 
       
      // if ((shot[i].pos.x<0) || (shot[i].pos.x>width) || (shot[i].pos.y<0) ||
      // (shot[i].pos.y>height)) {
      //   shot.splice(i,1);
      // }
    
        }
        tri.update();
        tri.edges();
        tri.show();
        // console.log('crash', crash);
        if (crash==false) {
        tri.color=255;
        test=0;
        }
        // if ((crash==true) && (tri.color!==255)) {
        //   console.log("crash is true, color is white.")
        //   guys.pop(guys.length-1);
        //   console.log("test", test);
        //   test++;
        // }
        // if (crash==true){console.log("poop")};
        crash=false;
        
 // console.log(shot.length);
  // if (shot.length>16) {
  //   shot.shift();
  // }
}
function keyPressed() {
   
   if (keyCode === 32) {
    blast();
 //   console.log("first shot pos",shot[0].pos.x,shot[0].pos.y);
   }
   if (keyCode === 68) {
 //   console.log("ship position",tri.pos.x,tri.pos.y);
   }
   if (keyCode === 70) {
  //   console.log("tri.pt[7] position",tri.pt[7].x,tri.pt[7].y);
   // console.log("joeX and joeY",joeX,joeY);

   }
}

function blast() {
  ang=u;
  shotCount++;
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
     if ((roids[j].radius==40) && (shot[i].pos.dist(roids[j].pos)<48)) {
    //   roids.splice(j,1);
       x=roids[j].pos.x;
       y=roids[j].pos.y;
       roids.splice(j, 1, new Roid(20,x,y), new Roid(20,x,y));    
       shot.splice(i,1);
       score=score+50;
       break;
     }
     if ((roids[j].radius==20) && (shot[i].pos.dist(roids[j].pos)<28)) {
      //   roids.splice(j,1);
      //   x=roids[j].pos.x;
      //   y=roids[j].pos.y;
      //   roids.splice(j, 1, new Roid(20,x,y), new Roid(20,x,y)); 
         roids.splice(j, 1);       
         shot.splice(i,1);
         score=score+10;
         break;
       }     
//    console.log(shot[i].pos.dist(roids[j].pos),i,j);
   }
  }
 
}
function makeRoids(rad,x,y) {
  for (i=0; i<roidAmt; i++) {
  roids[i]=new Roid(rad,x,y);
 }
}
function checkShipCrash() {    
      //  crashShip2();    
    for(j=0; j<roids.length; j++) {   
      for (i=0; i<12; i++) {
          joe = p5.Vector.add(tri.pt[i], tri.pos);
          if ((joe.dist(roids[j].pos)<roids[j].radius-2)) {
          crash=true;  
          crashShip();
       //   console.log('true')
          break;          
      }
    // else {console.log('false')}    
  }
}
}
function crashShip() {
  if ((crash==true) && (test==0)) {
    // console.log("crash is true, color is white.")
   // test++;
    guys.pop(guys.length-1);
    
    if (guys.length==0) {
   //   background(0);
      gameOver(); 
    }
    // console.log("test", test);
  //  test++;
  }
  
  test++;
  tri.color=('red');
 // crash=true;
  // console.log("test", test)
  // if (crash==true) {
  //   guys.pop(guys.length-1);
  //   crash=false;
  // }
}
function gameOver() {
  noLoop();
      background(0);
      fill(255);
      textSize(200);
      textAlign(CENTER);
      text("Game Over",width/2,height/2);
      textSize(50);
      text("Press refresh to play again",width/2,height/2+60);
      fill(255);
      text("Score: "+score,1200,50);
      if (timex<0) {
   //     background(0);
        fill('red');
        text("Time's up.",150,50);
}
// function crashShip2() {
//   tri.color=255;
//   crash=false;
// }
}
