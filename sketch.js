var box;

function setup() {
  createCanvas(400,400);

  var box = createSprite(200,200, 50,80);
  box.shapeColor = "red";
  box.velocityY = -2;
 

}

function draw() 
{
   background("yellow");

  
  drawSprites();
}




