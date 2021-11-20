var caixinha;
var caixinha2;
function setup() {
  createCanvas(400,400);
  caixinha=createSprite(200,200,10,10);
  caixinha.shapeColor=("black");
caixinha2=createSprite(300,200,10,10);
caixinha2.shapeColor=("white");
}
function draw() {
  background("purple");
  drawSprites();
  if (keyIsDown(RIGHT_ARROW)){
    caixinha.x=caixinha.x-1;
  }
  if (keyIsDown(LEFT_ARROW)){
caixinha2.x=caixinha2.x+7
  }
  if (keyIsDown(UP_ARROW)){
    caixinha.y=caixinha.y+2
  }
  if (keyIsDown(DOWN_ARROW)){
caixinha2.y=caixinha2.y+2
  }
}