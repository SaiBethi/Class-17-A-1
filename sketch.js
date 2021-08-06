var box1
var box2
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box (200,20,40,20,3)
  box2 = new Box (100,60,20,90,2)
}

function draw() 
{
  background(220);
box1.show()
box1.moveUp()

box2.show()
box2.moveUp()

box1.bounce()
box2.bounce()
}

