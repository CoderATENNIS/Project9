var box
function setup() {
  createCanvas(400,400);
box=createSprite(100,100,100,100)
}

function draw() 
{
  background("purple")
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5
  background("red")

  }
  if(keyDown("left")){
    box.x=box.x-5
    background("blue")

  }
  if(keyDown("up")){
    box.y=box.y-5
    background("yellow")
  }
  if(keyDown("down")){
    box.y=box.y+5
    background("green")
  }
  
 drawSprites();
}




