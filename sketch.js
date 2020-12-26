
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;

var dustbin;

var col = 0

var spawnB;
var pressed = false

var sizeSlider, sliderText, adjustText1, adjustText2;

var inputX, inputY;

var renewText;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	spawnB = createButton("Spawn Paper Ball")
	spawnB.position(1000, 300)
	spawnB.mousePressed(bPressed)

	sizeSlider = createSlider(10, 40, 25)
	sizeSlider.position(1000, 200)
	sliderText  = createP("Size of Paper Ball")
	sliderText.position(850, 185)

	adjustText1 = createP("(Please Adjust The Size Before Spawning The Paper Ball)")
	adjustText1.position(850, 150)
	adjustText2 = createP("(Please Adjust The Forces Before Pressing The Up Arrow)")
	adjustText2.position(850, 450)

	inputX = createInput("Type in the X Force (num)")
	inputY = createInput("Type in the Y Force (num)")
	inputX.position(950, 500)
	inputY.position(950, 550)

	renewText = createP("(If you don't get it renew the page)")
	renewText.position(810, 650)



	//Create the Bodies Here.



	ground = new Ground()


	dustbin = new Dustbin()


	Engine.run(engine);
  
}


function draw(){

  rectMode(CENTER);
  background(col);

  ground.show()
  dustbin.show()

  if(pressed){
	  paper.show()
  }

  
  drawSprites();
 
}


function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: inputX.value(), y: inputY.value()})
	}

}


function bPressed(){

	pressed = true
	paper = new Paper(100, sizeSlider.value())

}


