
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground1,ball1,bar1,bar2,bar3;



function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;



	bar1 =new dustbin(1200,650,200,20);
	bar2 =new dustbin(1090,610,20,100);
	bar3 =new dustbin(1290,610,20,100);

	ball1=new ball(200,450,48);
	ground1=new ground(800,670,1600,20);
	//Create the Bodies Here.


	


//	var render = Render.create({
	//	element: document.body,
	//	engine: engine,
	//	options: {
	//	  width: 1200,
	//	  height: 700,
	//	  wireframes: false
	//	}
	 // });
  
	  Engine.run(engine);
	  //Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  bar1.display();
  bar2.display();
  bar3.display();
  ball1.display();
  ground1.display();
  
 // keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
	}
}

