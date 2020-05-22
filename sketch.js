var paper, ground;
var block1, block2, block3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1000, 400);
	engine = Engine.create();
	world = engine.world;
    
	ground = new Ground(width/2,height-25,width,15);
	paper = new Paper(100,height-30,35,35);
    
	block1 = Bodies.rectangle(850, height-50, 200, 30, {isStatic:true});
	World.add(world,block1);
	block2 = Bodies.rectangle(750, height-85, 30, 100, {isStatic:true});
	World.add(world,block2);
	block3 = Bodies.rectangle(950, height-85, 30, 100, {isStatic:true});
	World.add(world,block3);
    
	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
    background("white");

	ground.display();
	paper.display();
	
	rect(block1.position.x, block1.position.y, 200,30);
	rect(block2.position.x, block2.position.y, 30,100);
	rect(block3.position.x, block3.position.y, 30,100);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body, paper.body.position,{x:+25, y:-25})
	}
}



