const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,rubberImg;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,600,1200,20);
    plane2 = new Plane(1200,300,20,650);
    plane3 = new Plane(600,0,1200,20);
    plane4 = new Plane(0,300,20,650);
    hammer = new Hammer(10,100);
    rubber = new Dubber(400,300,100,100);
    stone = new Stone(700,200,100,40);
    iron = new Iron(400,100,40,100);
    
    
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    plane2.display();
    plane3.display();
    plane4.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    
    
    
 
}