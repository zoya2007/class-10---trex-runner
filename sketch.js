var trex, trex_running, edges;
var ground,groundImage;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  //create ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
}


function draw(){
  //set background color 
  background("green");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  //gravity
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground);

  //ground velocity
  ground.velocityX = -3;

  //infinite running space
if (ground.x<0){
  ground.x = ground.width/2;
}
  

  drawSprites();
}