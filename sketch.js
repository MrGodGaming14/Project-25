
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin1;
var ground1;
var paper1;
function preload()
{
	
}

function setup() {
  createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  dustbin1=new Dustbin(1200,650);
	paper1=new Paper(200,450,40);
	ground1=new Ground(width/2,670,width,40);

 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  paper1.display();
  ground1.display();
  dustbin1.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-105});
  
  }
}


