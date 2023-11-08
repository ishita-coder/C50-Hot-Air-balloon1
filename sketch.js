var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
asteroidImage=loadAnimation("assets/asteroid.png")
planeImage=loadAnimation("assets/plane.png")
spaceBgImage=loadAnimation("assets/spacebg.png")
}

function setup(){

//background image
spaceBg = createSprite(165,485,1,1);
spaceBg.addImage(spaceBgImg);
spaceBg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating asteroid   
asteroid = createSprite(100,200,20,50);
asteroid.addAnimation("asteroid",asteroidImg);
asteroid.scale = 0.2;
//creating plane
plane=createSprite(100,200,20,50);
plane.addAnimation("plane",planeImg);
plane.scale=0.1;


}

function draw() {
  
  background("black");
        
 //making the hot air balloon jump
 if(keyDown("space")) {
space.velocityY= -4 ;
            
 }

//adding gravity
plane.velocityY = balloon.velocityY+0.23;
   
drawSprites();
        
}
