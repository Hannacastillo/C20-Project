var car,wall
var speed,weight

function setup() {
  createCanvas(1000,400);
  
speed=random(55,90)
weight=random(400,1500)

  car=createSprite(50, 200, 50, 50);
  car.shapeColor="blue"
car.velocityX=speed;

   wall=createSprite(900,200,60,height/2)
 wall.shapeColor=(80,80,80);
 }
 
 function draw() {
   background("black");  
 
 


 
   if(car.x-wall.x<=car.width/2+wall.width/2 && 
    wall.x-car.x<=car.width/2+wall.width/2){
    car.shapeColor="yellow"
    wall.shapeColor=(80,80,80)
  }
  
 
 
 if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if(deformation>180){
    car.shapeColor="red"
  }
  
  
  
  if(deformation<100){
    car.shapeColor="green"
  }

  else{
    car.shapeColor="blue"
    wall.shapeColor="blue"
  }

  }



 
   drawSprites();
 }