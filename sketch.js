var a, b;

function setup() {
  createCanvas(800,400);
  a = createSprite(200, 200, 50, 80);
  a.shapeColor="green"
 
  b = createSprite(400,200,80,30);
  b.shapeColor="green"
}

function draw() {
  background(0);  

  b.x=mouseX
  b.y=mouseY
  console.log();
  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 
    && a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2){
      a.shapeColor="red"

    }
    else{
      a.shapeColor="green"
    }

  drawSprites();

}