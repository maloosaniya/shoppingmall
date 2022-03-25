var bg,bgImage
var playerammount=10000;
var playerImage,player

function preload(){
bgImage=loadImage("assets/shoppingmall.png")
playerImage=loadImage("assets/player.png")
}

function setup(){
  createCanvas(800,500)
bg =createSprite(400,250,800,500)
 player=createSprite(200,350,50,50)

bg.addImage("background",bgImage)
player.addImage("player",playerImage)
player.scale=0.1;
}


function draw(){
  if(bgImage)
background(bgImage)
  if (keyDown("right")){
  player.x=500;
  }
drawSprites()
}