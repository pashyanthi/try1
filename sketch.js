

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var player,ground,block1,block2,block3,block4;
var block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


  ground = new Ground(400, 200, 50, 50);
  Engine.run(engine);

}

function draw() {

  background(255,255,255);  
  drawSprites();
  engine = Engine.create();
  world = engine.world;
}
