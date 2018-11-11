
function setup(){
  createCanvas(1000,1000);
  frameRate(50);
  noStroke();
}

function draw(){
//drawing out the shapes, each value is random
  //fill(colour, colour, colour, intensity)
  fill(random(255),random(0),random(255),random(500));
  //ellipse(x coordinate, y coordinate, size)
  ellipse(random(1000), random(1000), random(200));
  }
