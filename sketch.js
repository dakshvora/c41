var database;
var gameState=0;
var playerCount;
var game, player,form;
var allPlayers;
var c1, c2, c3, c4, cars;
var car1, car2, car3, car4, track;

function preload(){

  car1 = loadImage("sprites/car1.png");
  car2 = loadImage("sprites/car2.png");
  car3 = loadImage("sprites/car3.png");
  car4 = loadImage("sprites/car4.png");

  track = loadImage("sprites/track.jpg");

}


function setup(){
createCanvas(displayWidth - 40,displayHeight - 60);
database = firebase.database();
    
//form = new Form();

game = new Game();
game.getState();
game.start();
//player = new Player();
   
}

function draw(){
    background("white");
  //form.display();
  //player.getCount();
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }


   // drawSprites();
}
