var movingRect , fixedRect ;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite (400, 200, 100, 50);
  fixedRect.shapeColor =  "green";
  fixedRect.debug = true;
  movingRect = createSprite (200,200,50,100);
  movingRect.shapeColor = ("green");
  movingRect.debug = true;
}

function draw() {
  background("black"); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "white";
    fixedRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green"; 
  }
    
  
  


  drawSprites();
}


 