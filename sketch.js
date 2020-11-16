
var monkey , monkey_running;
var ground;
var banana ,bananaImage,bananaRandY, rock, rockImage;
var bananasGroup, rocksGroup;
var survival_time;

function preload(){
  
  
  monkeyRun =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  
  // monkey
  monkey = createSprite(100,320,20,20);
  monkey.addAnimation("running",monkeyRun);
  monkey.scale = 0.13;

  ground = createSprite(300,367,620,10);
  ground.shapeColor = 'brown';
  
  bananasGroup = new Group();
  rocksGroup = new Group();
  
  survival_time = 0;
}


function draw() {
  background('lightgreen');
  drawSprites();
  console.log(monkey.y);
  
  // survival time for the game
  fill('black');
  textSize(25);
  text("Survival Time : " + survival_time,200,30);
  survival_time = Math.round(frameCount/getFrameRate());
  if(keyDown("space") && monkey.y >= 315.95){
   monkey.velocityY = -18 ;
 }
 
  // moving ground
   ground.velocityX = -6;
 
  
  // infinity Ground 
  if(ground.x < 300){
    ground.x = ground.width/2;
  }
  // gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  // stand on ground,
  monkey.collide(ground);
  
  bananas();
  rocks();
}

function bananas (){
  if(frameCount %80 === 0){
  banana = createSprite(600,200,10,10);
  banana.addImage(bananaImage);
  banana.velocityX = -6;
  banana.scale = 0.1;
  // adding random y position to the banana
  banana.y = Math.round(random(130,210));
  banana.lifetime = 170;
  bananasGroup.add(banana);
  }
}

function rocks (){
  if(frameCount %300 === 0){
  rock = createSprite(600,335,10,10);
  rock.addImage(rockImage);
  rock.velocityX = -6;
  rock.scale = 0.15;
  rock.lifetime = 170; 
  rocksGroup.add(rock);
  }
}



