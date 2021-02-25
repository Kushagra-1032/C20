var fixedBox,movingBox;
function setup() {
  createCanvas(1200,800);
 fixedBox= createSprite(200, 200, 50, 50);
 movingBox= createSprite(400, 200, 80, 50);
 movingBox.shapeColor="green"
 fixedBox.shapeColor="green"
 
}

function draw() {
  background(255,255,255); 
  movingBox.x=mouseX;
  movingBox.y=mouseY; 
  console.log("distance",movingBox.x-fixedBox.x)
  if(movingBox.x-fixedBox.x<fixedBox.width/2+movingBox.width/2&&fixedBox.x-movingBox.x<fixedBox.width/2+movingBox.width/2&&movingBox.y-fixedBox.y<fixedBox.width/2+movingBox.width/2&&fixedBox.y-movingBox.y<fixedBox.width/2+movingBox.width/2){
   movingBox.shapeColor="red"
   fixedBox.shapeColor="red"
  
  }
  else{
    movingBox.shapeColor="green"
    fixedBox.shapeColor="green"
 
  }
  drawSprites();
}