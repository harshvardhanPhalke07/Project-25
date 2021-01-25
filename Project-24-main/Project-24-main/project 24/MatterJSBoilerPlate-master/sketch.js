

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground, Paper, trash_1,trash_2, trash_3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Ground= new ground(width/2, height-35, width,10)
Paper= new paper(600,400, 10);
trash_1= new dustbin (200,500,80,70);
trash_2= new dustbin (210,500,80,70);
trash_3= new dustbin (220,500,80,70);
	Engine.run(engine);
  
}

// Please check README.md while checking. Thank you.
function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  Ground.display();
  paper.display();
trash_1.display();
trash_2.display();
 trash_3.display();
}
function keypressed(){
	if (keycode=== up_arrow){
		Matter.body.applyForce(paper.body, paper.body.position,{x=85, y=-85})
	}
}


