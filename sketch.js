var bullet,wall,damage
var speed,weight,thickness


function setup() {
  createCanvas(1300,400);
  wall=createSprite(1200,200, thickness,height/2);
  bullet=createSprite(100, 200, 10, 10);
  speed=random(223,321)
  thickness=random(22,83)
  weight=random(30,52)
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
  if(damage>10){
    bullet.shapeColor="red"
  }
  
  if(damage<10){
    bullet.shapeColor="green"
  }
}

  drawSprites();
}