var bgImage,bg
var sleep,sleepImage
var brush,brushImage
var gym,gymImage
var eat,eatImage
var drink,drinkImage
var move,moveImage
var astronaut
function preload(){
bgImage=loadImage("images/iss.png")
sleepImage=loadAnimation("images/sleep.png")
brushImage=loadAnimation("images/brush.png")
gymImage=loadAnimation("images/gym1.png","images/gym2.png")
drinkImage=loadAnimation("images/drink1.png","images/drink2.png")
eatImage=loadAnimation("images/eat1.png","images/eat2.png")
moveImage=loadAnimation("images/move.png","images/move1.png")
}



function setup() {
  createCanvas(400, 400);
  bg=createSprite(200,200,10,10)
  bg.addImage("background",bgImage)
  bg.scale=1
  astronaut=createSprite(300,230)
  astronaut.addAnimation("sleeping",sleepImage);
  astronaut.scale=0.1
  
}

function draw() {
  background(0);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brushImage)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gymImage)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eatImage)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("drinking",drinkImage)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",moveImage)
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  drawSprites();
}