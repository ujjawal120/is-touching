var fixedRect, movingRect

function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(250,250,50,80);
  movingRect=createSprite(400,250,80,30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  
}


function draw() {
  background(0,0,0); 
  movingRect.y=World.mouseY; 
  movingRect.x=World.mouseX; 
if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x< movingRect.width/2+fixedRect.width/2&&
 movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2&&
  fixedRect.y-movingRect.y< movingRect.height/2+fixedRect.height/2){
  fixedRect.shapeColor="red";
 movingRect.shapeColor="red";
}
else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}


  drawSprites();
 
}