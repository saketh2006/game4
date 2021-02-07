const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ninja,ninjaImage
var backgroundImage
var engine, world;
var block1,block2;

function preload(){
  backgroundImage= loadImage("images/back.gif");
 // ninjaImage=loadImage("images/ninja 2.png");
}



function setup(){

createCanvas(900,600);
background = createSprite(350,350,900,600);
background.addImage(backgroundImage);
background.scale = 1.5

engine = Engine.create();
world = engine.world;
box1= new Box(350,400,200,10)
box2 = new Box(600,360,200,10);
box3 = new Box(100,300,100,10);
box4= new Box(700,380,200,10);


//ninja=createSprite(370,395,30,30)
//ninja.addImage(ninjaImage);


}
function draw(){
//background(backgroundImage);
background.velocityX=-2;
Engine.update(engine);
text(mouseX + "," + mouseY,mouseX,mouseY);

if (background.x < 300){
  background.x = 200;
}
drawSprites();
box1.display();
box2.display();
box3.display();
box4.display();

}