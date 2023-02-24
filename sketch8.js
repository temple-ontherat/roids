let roids=[];
let shot=[];
let shotCount=0;
let crash=false;
let u;
let q;
let test=0;
let guys=[];
let timex=0;
let score=0;
let timeStart=90;
let sound1,sound2,sound3;
let sound4,sound5,sound6;
let once=0;
let alien;
let alShot=[];
let ntId;
let check;
let level=0;
let shotInt=4000;
function preload() {
  // soundFormats('mp3', 'ogg');
   sound1 = loadSound('pyowpyow.mp3');
   sound1.setVolume(.1);

   sound2=loadSound('roidBurst2.mp3');
   
   sound3=loadSound('shipCrash.mp3');
   sound3.setVolume(.3);

  sound4=loadSound('roidRage.mp3');
  sound4.setVolume(.6);
  sound5=loadSound('alienVaporize.mp3');
  sound5.setVolume(.3);
  sound6=loadSound('alienPresence.mp3');
  sound6.setVolume(.25);
  image1=loadImage('roidImg5.png'); 
  image2=loadImage('spaceImg.png'); 
  image3=loadImage('shipImage2.png'); 
  image4=loadImage('alien4.png'); 
  image5=loadImage('alien6.png'); 

}
function alienPresence(){
  sound6.play();
}
function roidRage() {
  sound4.loop();
}

function pyow() {
 // sound1.loop=true;
//  sound1.load();
  sound1.play();
}
function roidBurst(){
//  sound2.load();
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
  // sound1= new Audio('pyowpyow5.mp3');
  // sound3= new Audio('shipCrash.mp3');
  // sound2= new Audio('roidBurst2.mp3');
  // sound4= new Audio('roidRage.mp3');
  
  angleMode(DEGREES);
  toggle=1;
  tri=new Ship();
  //alien=new Alien(60,40);
  
  // append(alShot,new Shot2());
  u=0;
  rot=5;
  roidAmt=7;
  textSize(40);
  displayMessage="Hit enter to start game.";
  displayMessage2="Right and left arrows for turning, up arrow";
  displayMessage3="for thrust, and space bar for shooting.";
  displayMessage4="Press p to pause the game.";
  displayMessage5="Press r to restart game.";

  //displayMessage4="and space bar for shooting.";
  startTime=Math.floor(millis()/1000);
  for (i=0; i<3; i++) {
    guys[i]=new Guys();

  }
  // console.log(sound4);
 // roidRage();
    noLoop();
}
function draw() {
  fps=frameRate();
 // sound4.play();

  background(220);
  image(image2,0,0);
  fill(255);
  text(displayMessage, width/3,55);
  textSize(20);
  text(displayMessage2, width/3,86);
  text(displayMessage3, width/3,115);
  text(displayMessage4, width/3,144);
  text(displayMessage5, width/3,173);

//  textSize(30);
 // text(fps.toFixed(2), width/2,55);
 // text(displayMessage4, width/3,145);
  if (alien) {
    alien.show();
    alien.edges();
    alien.update();
  }
  for (al of alShot) {
  al.show();
  al.update();
  }
  if ((alien) && (alien.edges())) {
    alShot=[];
    clearInterval(ntId);

    alien=new Alien(60,40);
    alienPresence(); 
   // alien2=new Alien(60,40);
  //  alien3=new Alien(60,40);
    
    ntId=setInterval(alienShot,shotInt);
  }
  if (!alien) {
  //  setInterval(alienShot,2000);
   sound6.stop();
    // alShot=[];
  }
  // if ((alien.colorG==0) && (alien.width>0)) {
    if ((alien) && (alien.colorG==0)) {
 
  // alien.alf=alien.alf-5;
    alien.width=alien.width-3;
    alien.height=alien.height-2;
  }
  if ((alien)&& (alien.width<0)) {
    alien.alf=0;
    alien.alf2=0;
  }
  else if (alien) {
  //  alien.alf=0;
    alien.alf=255;
    alien.colorR=255;
    alien.colorG=255;
    alien.colorB=255;
  }
  for (roid in roids) {
    
    roids[roid].show();
    roids[roid].update();
    roids[roid].edges();
  }
   timex=timeStart-(Math.floor(millis()/1000)-startTime);

textSize(50);
//**************FUEL COUNTDOWN**********8**8
// if (timex<0) {
//   background(0);
//   fill('red');
//   text("Time's up.",50,50);
//   gameOver();
// }
//  else {text("Fuel: "+timex,50,50)};
//**************FUEL COUNTDOWN**********8**8

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
  // if (keyIsDown(DOWN_ARROW)) {
  //   append(alShot,new Shot2);
  // }
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
   if (keyCode === 82) {
      sound4.stop();
      location.reload();
   }
   if ((keyCode === ENTER) && (once<1)) {
    sound4.loop();
    displayMessage="";
    displayMessage2="";
    displayMessage3="";
    displayMessage4="";
    displayMessage5="";
    timeStart=90;
    once++;
    startTime=Math.floor(millis()/1000);

   loop();
   let fs=fullscreen();
   fullscreen(!fs);
   displayMessage="";
  // setInterval(alienShot,5000);
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
   if ((alien) && (shot[i].pos.dist(alien.pos)<30) && (alien.colorG==255)) {
    sound5.play();
    alShot=[];
    clearInterval(ntId);
   // alien.color='red';
    score=score+20;
    alien.colorR=255;
    alien.colorG=0;
    alien.colorB=0;
   } 
   for(j=0; j<roids.length; j++) {
   
  //   distance=p5.Vector.dist(shot[i].pos,roids[j].pos);
     if ((roids[j].radius==40) && (shot[i].pos.dist(roids[j].pos)<48)) {
    //   roids.splice(j,1);
       x=roids[j].pos.x;
       y=roids[j].pos.y;
       roids.splice(j, 1, new Roid(20,x,y,roids[j].mult1), new Roid(20,x,y,roids[j].mult2));    
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
 if (roids.length==0) {
  //alien=[];
  shotInt-=1000;

  if (shotInt<1000) {
    shotInt=1000
  }
  alien=new Alien(60,40);
 }
}
function makeRoids(rad,x,y) {
  for (i=0; i<roidAmt; i++) {
  roids[i]=new Roid(rad,x,y);
 }
 level++;
}
// function checkShipCrash() {    
//       //  crashShip2();    
//     for(j=0; j<roids.length; j++) {   
//       for (i=0; i<12; i++) {
//           joe = p5.Vector.add(tri.pt[i], tri.pos);
//           if ((joe.dist(roids[j].pos)<roids[j].radius-2)) {
//           crash=true;
//           shipCrash();  
//           crashShip();
//        //   console.log('true')
//           break;          
//       }
//     // else {console.log('false')}    
//   }
// }
// }
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
      if ((alien) && (alShot) && (alien.colorG==255)) {
        for (let z=0; z<alShot.length; z++) {
        if ((joe.dist(alShot[z].pos)<3) && (tri.colorG=255)) {
        alShot=[];  
        crash=true;
        shipCrash();  
        crashShip();
        break;
      }
    }   
}
      if ((alien) && (alien.colorG==255) && (joe.dist(alien.pos)<10)) {
        alShot=[];  
        crash=true;
        shipCrash();  
        crashShip();
        break;
      }
  }
}
}
function crashShip() {
  if ((crash==true) && (test==0)) {
    // console.log("crash is true, color is white.")
   // test++;
    guys.pop(guys.length-1);
   //***************DISABLE GAMEOVER********** 
    if (guys.length==0) {
   //   background(0);
      gameOver(); 
    }
  //***************DISABLE GAMEOVER********** 
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
      text("Press r to play again",width/2,height/2+60);
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
function alienShot() {
 // setInterval(()=>append(alShot,new Shot2()),500);
 append(alShot, new Shot2())
}
