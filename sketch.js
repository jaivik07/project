var car,wall
var speed,weight



function setup() {
 
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed=Random(55,90)
  weight=Random(400,1500)
}

function draw() {
  background(255,255,255); 
  
  car=createSprite(50,200,50,50)
  car.shapecolor=color(225,225,225);
  wall=createSprite(1500,20,60,height/2)
  car.velocityX=speed
  drawSprites();
}

function deforme(){
if(wall.x - car.x < (car,width+wall,width) /2)
{ 
  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22500;
  if(deformation>180)
{car.shapecolor=color(255,0,0)}
if (deformation>180 && deformation<100)
{car.shapecolor=color(230,230,0)}
if(deformation<100)
{car.shapecolor=color(0,255,0)}
}}