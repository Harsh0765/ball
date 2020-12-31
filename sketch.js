//namespaces for Matter objects
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var ball;

var myEngine, myWorld, myground;

function setup() {
  createCanvas(400,400);

  // create a new engine
  myEngine = Engine.create();
  // create a new world
  myWorld = myEngine.world;
  
  // to make the rect stationary
  var options = {
    isStatic: true
  }

  var ballOption = {
    restitution : 1.5
  }
  
  // create rentangle body
  myground = Bodies.rectangle(200, 360, 400, 10, options);
  // add the body to the world
  World.add(myWorld, myground);
  
  ball = Bodies.circle(200,100,20,ballOption);
  World.add(myWorld,ball);


  
}

function draw() {
  background(0);  
  // update the Engine
  Engine.update(myEngine);  
  // to draw it at center point
  rectMode(CENTER);
  // display the rect body
  rect(myground.position.x, myground.position.y, 400, 10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);


}