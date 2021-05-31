var cat1,cat2,cat3,cat;
var rat,rat1,rat2,rat3;
var garden;
function preload() {
    //load the images here
    cat1= loadAnimation("images/cat1.png");
    cat2= loadAnimation("images/cat2.png","images/cat3.png");
    cat3= loadAnimation("images/cat4.png");

    rat1= loadAnimation("images/mouse1.png");
    rat2= loadAnimation("images/mouse2.png","images/mouse3.png");
    rat3= loadAnimation("images/mouse4.png");

    garden= loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat= createSprite(870,600);
rat= createSprite(200,600);
cat.addAnimation("sleepingCat",cat1);
rat.addAnimation("standingRat",rat1);
cat.scale=0.2;
rat.scale= 0.2;
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x-rat.x<cat.width/2-rat.width/2){
        cat.velocityX=0;
        cat.addAnimation("collidingCat",cat3);
        cat.changeAnimation("collidingCat");
        cat.x=300;
    
        rat.addAnimation("collidingRat",rat3);
        rat.changeAnimation("collidingRat");
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-3;
    cat.addAnimation("movingCat",cat2);
    cat.changeAnimation("movingCat");

    rat.addAnimation("teasingRat",rat2);
    rat.frameDelay=25;
    rat.changeAnimation("teasingRat");
}

}
