var trex, trexImg;
var edges;
var ground;
var groundImg;
var invisibleGround;
function preload()
{
    trexImg = loadAnimation("trex1.png","trex3.png", "trex4.png");
    groundImg = loadImage('ground2.png');
}

function setup() {
  createCanvas(600, 200);
  trex = createSprite(120, 130, 20, 50);
  trex.addAnimation("trex",trexImg);
  trex.scale = 0.6;
   

  invisibleGround = createSprite(300,175,600,10);
 invisibleGround.visible = false

ground = createSprite(300,160,600,10);
ground.addImage(groundImg);
  edges = createEdgeSprites();
}

function draw() {
  background(220);

 // text(what i want display, x post, ypos);
  textSize(15);
  text(mouseX + "," + mouseY, mouseX, mouseY);

  ground.velocityX = -3;
//console.log(ground.x);
if(ground.x<0){
 // ground.x = 300;
ground.x = ground.width/2;

}
console.log(trex.y)
  //make trex jump    
    if(keyDown("space")&& (trex.y>= 135))
    {
        trex.velocityY = -12;
    }
   
   
   //gravity
    trex.velocityY = trex.velocityY + 1;
  
   trex.collide(invisibleGround);


  //trex collides with bottom edge
    trex.collide(edges[3]);
   

  drawSprites();
}