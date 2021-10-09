
var trex ,trex_running;
var ground, ground_image;
var invisibleground;
var cloud, cloud_image;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image=loadImage("ground2.png")
  cloud_image=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  //create a trex sprite
  trex= createSprite(50, 180, 40, 40)
  trex.scale = 0.5 
  trex.addAnimation("running",trex_running)
  ground=createSprite(55, 180, 600, 20)
  ground.addImage(ground_image)
  ground.velocityX= -4
  // invisble ground
  invisibleground=createSprite(55,195, 100, 15)
  invisibleground.visible=false
}

function draw(){
  background("white")
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8

  if(ground.x<0){
    ground.x= ground.width/2
  }
 
  trex.collide(invisibleground)
  spawnclouds()
  drawSprites()
}

function spawnclouds(){
  if(frameCount%60 == 0){
  
  cloud=createSprite(600,random(10, 100), 20, 40)
  cloud.addImage(cloud_image)
  cloud.velocityX=-4 
cloud.depth= trex.depth
trex.depth+= 1}
}