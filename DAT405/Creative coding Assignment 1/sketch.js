function setup(){
  createCanvas(1000,1000);
  frameRate(10);

}

function draw(){
  fill(random(200),random(75),random(255),random(255))
  rect(mouseX, 0, 100, 100, 50);
  rect(mouseX, 150, 100, 100, 50);
  rect(mouseX, 300, 100, 100, 50);

  rect(0, mouseY, 100, 100, 50);
  rect(150, mouseY, 100, 100, 50);
  rect(300, mouseY, 100, 100, 50);
  rect(450, mouseY, 100, 100, 50);
  rect(600, mouseY, 100, 100, 50);
  rect(750, mouseY, 100, 100, 50);

}
