var b1, b2;
var b3, b4;
var b5, b6;
var b7, b8;
var b9, b10;
var ground;

function setup() {
  createCanvas(400, 400);
  
  ground = createSprite(200,395,500,100);
  ground.shapeColor = "green";
  
  b1 = createSprite(20,320,20,150);
  b1.shapeColor = "red";
  
  b2 = createSprite(60, 270, 20, 250);
  b2.shapeColor = "indigo";
  
  b3 = createSprite(100, 345, 20, 100);
  b3.shapeColor = "blue";
  
  b4 = createSprite(140, 220, 20, 350);
  b4.shapeColor = "orange";
  
  b5 = createSprite(180,300,20,190);
  b5.shapeColor = "magenta";
  
  b6 = createSprite(220, 300, 20, 190);
  b6.shapeColor = "yellow";
  
  b7 = createSprite(260, 335, 20, 120);
  b7.shapeColor = "pink";
  
  b8 = createSprite(300, 250, 20, 290);
  b8.shapeColor = "lightgreen"
  
  b9 = createSprite(340,350,20,90);
  b9.shapeColor = "purple"
  
  b10 = createSprite(380,320,20,150);
  b10.shapeColor = "violet";
}

function draw() {
  background("lightblue");  
  drawSprites();
}