//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImage, happyDogImage, dogImage2, dogImage3;

function preload()
{
  //load images here
  dogImage = loadImage('Dog.png');
  happyDogImage = loadImage('happyDog.png');
  dogImage2 = loadImage('images/dogImg.png');
  dogImage3 = loadImage('images/dogImg1.png');
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46,139,87);
  dog = createSprite(250,250);
  dog.addImage(dogImage);
  dog.scale = 0.2;
  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }

  drawSprites();
  //add styles here
  textSize(20);
  stroke("purple");
  text("Note: Press up arrow key to feed drago milk", 50,100);
  
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food: x
  });
  
}



