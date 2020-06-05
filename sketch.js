var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);

  speed=random(15,20);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.visible=true;
  wall=createSprite(1000,200,60,height/2);
  wall.visible=true;
}

function draw() {
  background("BLACK"); 

  car.velocityX=speed; 
  
  if(car.x-wall.x<wall.width/2+car.width/2 && 
    wall.x-car.x<wall.width/2+car.width/2 &&
    car.y-wall.y<wall.height/2+car.height/2 &&
    wall.y-car.y<wall.height/2+car.height/2){
      deformation=0.5 * weight * speed * speed/22500;
    }
  if(deformation<100){
    car.shapeColor="green";
  }
  if(deformation>180){
    car.shapeColor="red";
  }
  if(deformation<170 && deformation>110){
    car.shapeColor="yellow";
  }

  drawSprites();
}