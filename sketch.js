const Engine=Matter.Engine
const World=Matter.World 
const Bodies=Matter.Bodies 
 
var engine,world;
var ground,box1,box2 ;
function setup() {
var canvas=createCanvas(600,600); 
engine=Engine.create();
world=engine.world;
ground = new Ground(200,height,750,10);
box1 = new Box(200,300,50,50);
box2 = new Box(240,100,50,50);
 }
          
 function draw() { 
           
  background(255,255,255);
 Engine.update(engine);
 ground.display();
 box1.display();
 box2.display();
 }
