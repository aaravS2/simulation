var bullet,wall,speed,weight,thikness;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(100, 200, 50, 10);
  wall=createSprite(1500,200,10,300);
  speed=random(200,390);
  weight=random(55,98);
  thikness=random(10,80)
}

function draw() {
  background(80,80,80);
  wall.shapeColor="white";
  bullet.shapeColor="yellow";
  wall.width=thikness;
  switch(speed){
case 1:speed=286;
break;
case 2:speed=377;
break;
case 3:speed=297;
break;
case 4:speed=388;
break;
case 5:speed=289;
break;
case 45:speed=379;
break;
case 46:speed=229;break;
case 47:speed=290;break;
case 48:speed=390;break;
case 49:speed=234;break;
case 50:speed=298;break;
case 55:speed=309;break;
case 35:speed=201;break;
case 95:speed=250;break;

case 98:speed=293;
default:break;
  }
switch (weight) {
  case 1:weight=19;
    break;
case 2:weight=10;
break;
case 3:weight=19;
break;
case 4:weight=20;
break;
case 5:weight=98;
break;
case 6:weight=17;
break;
case 7:weight=13;
break;
case 8:weight=97;
break;
case 9:weight=99;
break;
case 1100:weight=56;
  
default:break;
  }

switch (thikness) {
  case 1:weight=50;
    break;
case 2:weight=51;
break;
case 3:weight=52;
break;
case 4:weight=60;
break;
case 5:weight=78;
break;
case 6:weight=62;
break;
case 7:weight=61;
break;
case 8:weight=37;
break;
case 9:weight=80;
break;
case 50:weight=41;
  default:break;
    
}
  bullet.velocityX=speed;
  if (wall.x-bullet.x<(bullet.width+wall.width)/2) {
    var defor=(0.5*weight*speed*speed/(thikness*thikness*thikness));
    bullet.velocityX=0;
    
    if (defor<10) {
      wall.shapeColor="green";
      text("Strong enough",700,200);
      bullet.x=1470;
      bullet.velocityX=0;
    }
    if (defor>10) {
      wall.shapeColor="red";
      text("too weak",700,200);
     
  bullet.x=1530;
  bullet.velocityX=0;
    }
    
  }
  
  
  text("DAMAGE:"+Math.round(defor),800,350);
  text("speed:"+Math.round(speed),1000,350);
  text("weight:"+Math.round(weight),600,350);
  text("thikness:"+Math.round(thikness),200,350);
  
   
  drawSprites();
}