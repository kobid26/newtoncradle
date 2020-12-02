
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Constraint= Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	bob1=new bob(390,500,61.3);
	bob2=new bob(bob1.x+60,500,61.3);
	bob3=new bob(bob2.x+60,500,61.3);
	bob4=new bob(bob1.x-60,500,61.3);
	bob5=new bob(bob4.x-60,500,61.3);

	Roof= new roof(380,60,325,15);
	
	rope1 = new Rope(bob1.body, Roof.body, -60, 0, 700);
	rope2 = new Rope(bob2.body, Roof.body, 0, 0, 700);
	rope3 = new Rope(bob3.body, Roof.body, 60, 0, 700);
	rope4 = new Rope(bob4.body, Roof.body, -120, 0, 700);
	rope5 = new Rope(bob5.body, Roof.body,-180, 0, 700);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(30,35,40);
 Roof.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

drawSprites();
}
function keyPressed (){

if (keyCode === "UP_ARROW"){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
}
}

function drawLine(constraint){
bobBodyPosition=constraint.bodyA.position
roofBodyPosition=constraint.bodyB.position

roofBodyOffset=constraint.pointB

roofBodyX=roofBodyPosition.x+roofBodyOffset.x
roofBodyY=roofBodyPosition.y+roofBodyOffset.y
line(bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY)


}
