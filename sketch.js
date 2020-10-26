//declaring variables
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;

//making a SurvivalTime variable
var SurvivalTime=0;

function preload(){
//loading animations for monkey
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
//loading images for banana and obstacle  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
//making a sprite object for monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
//making a sprite object for ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
//creating new groups
  FoodGroup=new Group();
  obstacleGroup=new Group();  
  
}

function draw() {
//hiding the background  
  background(245);
  
if(ground.x<0){
  ground.x=ground.width/2;
}  
 
if(keyDown("space") && monkey.y>=120){
  monkey.velocityY=-12;
}
  monkey.velocityY=monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ SurvivalTime,100,50);
   
drawSprites();
food();
Obstacle();  
}

function food(){
  if(frameCount%80===0){
  banana=createSprite(400,Math.round(random(120,200)),20,20);
  banana.velocityX=-4;
  banana.addImage(bananaImage);
  banana.scale=0.1;
  FoodGroup.add(banana);
  FoodGroup.setLifetimeEach(100);
  
  } 
}

function Obstacle(){
  if(frameCount%300===0){
  obstacle=createSprite(400,315,20,20);
  obstacle.velocityX=-4;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;  
  obstacleGroup.add(obstacle);
  obstacleGroup.setLifetimeEach(100);  
    
  }
}



