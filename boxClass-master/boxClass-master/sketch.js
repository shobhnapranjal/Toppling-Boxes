const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2= new Box(160,200,50,50);

    var option={isStatic:true};
    ground=Bodies.rectangle(200,380,400,20,option);
    World.add(world,ground)

}

function draw(){
    background("blue");
    Engine.update(engine);
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,400,20)
    box1.display();
    box2.display();
   
}