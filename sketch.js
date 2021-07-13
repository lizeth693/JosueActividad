const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var sound;
var box1;
var ground,ground2,ground3;
var cubo1,cubo2,cubo3,cubo4,cubo5,cubo6,cubo7,cubo8,cubo9,cubo10,cubo11,cubo12,cubo13,cubo14,cubo15,cubo16,cubo17,cubo18;
function preload(){
  sound = loadSound("bell.mp3");
}
function setup(){
    var canvas = createCanvas(1360,670);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(41,136,50,50);
    ground = new Ground(670,650,1400,20);
    ground2 = new Ground(5,320,20,640.5);
    ground3 = new Ground(1335,320,20,640.5);
    cubo1 = new Cubo(200,600,50,20);
    cubo2 = new Cubo(350,500,50,20);
    cubo3 = new Cubo(500,400,50,20);
    cubo4 = new Cubo(650,550,50,20);
    cubo5 = new Cubo(800,400,50,20);
    cubo6 = new Cubo(875,450,50,20);
    cubo7 = new Cubo(950,500,50,20);
    cubo8 = new Cubo(1025,550,50,20);
    cubo9 = new Cubo(1175,400,50,20);
    cubo10 = new Cubo(1302.5,300,45,20);
    cubo11 = new Cubo(1175,200,50,20);
    cubo12 = new Cubo(1025,100,50,20);
    cubo13 = new Cubo(960,150,50,20);
    cubo14 = new Cubo(800,100,50,20);
    cubo15 = new Cubo(735,150,50,20);
    cubo16 = new Cubo(575,100,50,20);
    cubo17 = new Cubo(510,150,50,20);
    cubo18 = new Cubo(200,100,370,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    sound.play();
    if(keyCode==LEFT_ARROW){
      box1.position.x=box1.position.x-10;
    }
    if(keyCode==RIGHT_ARROW){
      box1.position.x=box1.position.x+10;
    }
    box1.display();
    ground.display();
    ground2.display();
    ground3.display();
    cubo1.display();
    cubo2.display();
    cubo3.display();
    cubo4.display();
    cubo5.display();
    cubo6.display();
    cubo7.display();
    cubo8.display();
    cubo9.display();
    cubo10.display();
    cubo11.display();
    cubo12.display();
    cubo13.display();
    cubo14.display();
    cubo15.display();
    cubo16.display();
    cubo17.display();
    cubo18.display();
}
