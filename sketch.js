const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;
var box10,box11,box12;
var box13;
var box14,box15,box16,box17,box18;
var box19,box20,box21;
var box22;
var polyIMG;
var sling;
var score = 0;
var backgroundImg, bg;

function preload(){
    polyIMG = loadImage("polygon.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,285,200,10);
    ground2 = new Ground(900,195,200,10);
    ground3 = new Ground(750, 390, 1500, 20);

    box1 = new Box(600,260,30,40);
    box2 = new Box(570,260,30,40);
    box3 = new Box(540,260,30,40);
    box4 = new Box(630,260,30,40);
    box5 = new Box(660,260,30,40);

    box6 = new Box(585,220,30,40);
    box7 = new Box(555,220,30,40);
    box8 = new Box(615,220,30,40);
    box9 = new Box(645,220,30,40);

    box10 = new Box(600,180,30,40);
    box11 = new Box(570,180,30,40);
    box12 = new Box(630,180,30,40);

    box13 = new Box(600,140,30,40);

    box14 = new Box (900,170,30,40);
    box15 = new Box(930,170,30,40);
    box16 = new Box(870,170,30,40);
    box17 = new Box(840,170,30,40);
    box18 = new Box(960,170,30,40);

    box19 = new Box(900,130,30,40);
    box20 = new Box(930,130,30,40);
    box21 = new Box(870,130,30,40);

    box22 = new Box(900,90,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    sling = new Sling(this.polygon,{x:150, y:160});

}

function draw(){
  if(backgroundImg)

  background(backgroundImg); 

    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();

    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    fill("cyan");
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    fill("pink");
    box10.display();
    box11.display();
    box12.display();

    fill("lemon");
    box13.display();

    fill("blue");
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    fill("cyan");
    box19.display();
    box20.display();
    box21.display();

    fill("lemon");
    box22.display();

    imageMode(CENTER);
    image(polyIMG,polygon.position.x,polygon.position.y,40,40);

    sling.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();

    textSize(20);
    fill("cyan");
    text("Press the space bar to bring back the polygon!", 400, 350);
    text("Score : " + score ,150,50);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    sling.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        sling.attach(this.polygon);
    }
  } 

  async function getTime(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
  
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour);
  
    if(hour >= 06 && hour <= 18){
      bg = "orange";
    } else{
      bg = "red";
    }
  
    backgroundImg = bg;
  }