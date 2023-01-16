let roids=[];
let shot=[];
let shotCount=0;
let crash=true;
let u;
let q;
let test=0;
let guys=[];
let timex=0;
let score=0;
let timeStart=90;
let sound1,sound2,sound3;
function preload() {
  soundFormats('mp3', 'ogg');
  sound1 = loadSound('pyowpyow.mp3');
  sound2=loadSound('roidBurst2.mp3');
  sound3=loadSound('shipCrash.mp3');
  image1=loadImage('roidImg3.png'); 
  image2=loadImage('spaceImg.png'); 

}
function pyow() {
  sound1.play();
}
function roidBurst(){
  sound2.play();
}
function shipCrash() {
  sound3.play();
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  //butt=createButton("Click here to enter fullscreen"+
  //" and start game.");
  //butt.position(width/3,20);
  angleMode(DEGREES);
  toggle=1;
  tri=new Ship();
  u=0;
  rot=5;
  roidAmt=15;
  textSize(40);
  displayMessage="Hit enter to start game.";
  displayMessage2="Right and left arrows for turning, up arrow";
  displayMessage3="for thrust, and space bar for shooting.";
  displayMessage4="Press P to pause the game.";
 
  //displayMessage4="and space bar for shooting.";
  startTime=Math.floor(millis()/1000);
  for (i=0; i<3; i++) {
    guys[i]=new Guys();

  }
  roidRage();
  noLoop();
}
function draw() {
  background(220);
  image(image2,0,0);
  fill(255);
  text(displayMessage, width/3,55);
  textSize(20);
  text(displayMessage2, width/3,86);
  text(displayMessage3, width/3,115);
  text(displayMessage4, width/3,144);

 // text(displayMessage4, width/3,145);

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
  else {text("Fuel: "+timex,50,50)};
  text("Score: "+score,width*3/4,50);
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
    
    guys[guy].show(25*q+25,height*21/22);
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
    for (i=0; i<shot.length; i++) {
        shot[i].show();
        shot[i].update();
      if ((shot.length>0) && (shot[i].pos.dist(tri.pos)>300)) {
        shot.splice(i,1);
      } 
        }
        tri.update();
        tri.edges();
        tri.show();
        // console.log('crash', crash);
        if (crash==false) {
        tri.color=255;
        test=0;
        }
        crash=false;
}
function keyPressed() {  
   if (keyCode === 32) {
    pyow();
    blast();
 //   console.log("first shot pos",shot[0].pos.x,shot[0].pos.y);
   }
   if (keyCode === 68) {
 //   console.log("ship position",tri.pos.x,tri.pos.y);
   }
   if (keyCode === ENTER) {
    displayMessage="";
    displayMessage2="";
    displayMessage3="";
    displayMessage4="";
    timeStart=90;
    startTime=Math.floor(millis()/1000);

   loop();
   let fs=fullscreen();
   fullscreen(!fs);
   displayMessage="";
   }
   if (keyCode === 80) {
    if (toggle<0) { 
    startTime=Math.floor(millis()/1000);
    timeStart=tempTime;
      loop();
    }
    else {
      tempTime=timex;
      noLoop();
    }
    toggle=toggle*-1;
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
       roidBurst();
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
         roidBurst();
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
          shipCrash();  
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
      text("Press Esc to leave fullscreen mode.", width/3, height/6);
      fill(255);
      text("Score: "+score,width*3/4,50);
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

