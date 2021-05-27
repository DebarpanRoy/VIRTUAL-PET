var dog,happyDog,database,foodS,foodStock


function preload()
{
 dogImage = loadImage("images/dogImg.png")
 happyDogImage = loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database()
	createCanvas(500,500);
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  //foodStock.set(20)

  dog = createSprite(250,300,10,50)
  dog.addImage(dogImage);
  dog.scale = 0.2;
}


function draw() {  
  background("green")
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
    }
 
  fill(255,255,255)
  textSize(20);
  
  text("PRESS UP_ARROW KEY TO FEED DRAGO MILK",20,100)
  text("FOOD REMAINING-"+foodS,150,150)
drawSprites();

}

function readStock(data){
foodS=data.val();
}
function writeStock(x){
if(x<=0 ){
 x = 0;

}
else{
x = x-1
}
database.ref('/').update({
Food:x
}
)

}



