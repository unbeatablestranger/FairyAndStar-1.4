const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() 
{
	createCanvas(800, 650);
  
  // fairyVoice.play();
	fairy = createSprite(130, 480);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650,30,5, {isStatic: true, restitution: 1});
	World.add(world, starBody);

	

    

	Engine.run(engine);

}


function draw() 
{
	Engine.update(engine);
	
  background(bgImg);

  //fairyVoice.play();

  star.x = starBody.position.x;
  star.y = starBody.position.y;
 

  

  if(keyWentDown("right_arrow"))
  {   
    fairy.velocityX=5;
  }else if(keyWentUp("right_arrow"))
   {
	   fairy.velocityX=0;  
   }

   if(keyWentDown("left_arrow"))
   {
	 fairy.velocityX=-5;  
   }else if(keyWentUp("left_arrow"))
    {
	  fairy.velocityX=0;	
	} 

  
  
  
   
  if(keyDown("down_arrow"))
  {
    Matter.Body.setStatic(starBody, false); 
  }

  if(star.y > 475 && starBody.position.y > 475)
  {
	Matter.Body.setStatic(starBody, true);  
  }


  drawSprites();

}



