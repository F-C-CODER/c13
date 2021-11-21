var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudImage


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");

  cloudImage=loadImage("cloud.png")
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10)
  invisibleGround.visible=false
}

function draw() {
  //set background color
  background(0);
  
  
  
  // jump when the space key is pressed
  if(keyDown("space") && trex.y>150) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);

  spawnClouds()
  drawSprites();
  
}

function spawnClouds(){
if(frameCount%50==0){
  var cloud=createSprite(600,50,20,20)
  cloud.addImage("cloudImage",cloudImage)
  cloud.velocityX=-4
  cloud.scale=0.5
  var r=Math.round(random(20,100))
  cloud.y=r
}
}


