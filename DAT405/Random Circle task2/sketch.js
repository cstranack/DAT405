
function setup(){
  createCanvas(1000,1000);
  frameRate(10);
  //noStroke();
}

function draw(){
  customShape();
}


function customShape(){
//drawing out the shapes, each value is random
  //fill(random(255),random(0),random(255),random(500));
  let xCoordinate = (random(1000));
  let yCoordinate = (random(1000))
  let size = 100

  fill(255,255,255);
  ellipse(xCoordinate, yCoordinate, size);

  fill(0);
  ellipse(xCoordinate, yCoordinate, size - 10);

  fill(255,255,255);
  ellipse(xCoordinate, yCoordinate, size - 20);

  ellipse(xCoordinate, yCoordinate, size - 35);

  stroke(200,0,200);
  strokeWeight(5);
  ellipse(xCoordinate, yCoordinate, size - 55);

  stroke(0);
  strokeWeight(1);
  fill(0,255,255);
  ellipse(xCoordinate, yCoordinate, size - 75);

}
