const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base =new Base(150,500,400,50);
  base_2 =new Base(1050,500,400,50);
  link = new Link(base,base_2);
  Matter.Composite.add(bridge.body,jointPoint);
  rope = new Rope(10,{x:50,y:50});


}

function draw() {
  background(51);
  Engine.update(engine);
  rectMode(CENTER);
  base.show();
  base_2.show();
  rope.show();
}
