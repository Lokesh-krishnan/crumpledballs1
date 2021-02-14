const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,paper1;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);
	dustbin1 = new dustbin(600,640,150,10);
	dustbin2 = new dustbin(530,570,10,150);
	dustbin3 = new dustbin(670,570,10,150);
	paper1 = new paper(100,450,70);
	ground1 = new ground(350,650,width,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  ground1.display();

  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:65,y:-185});
}
}

