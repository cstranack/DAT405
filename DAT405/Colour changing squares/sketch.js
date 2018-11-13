function setup(){
  createCanvas(500,500);
  background(0,0,0);

}

function draw(){
  var mousePositionX = map(mouseX,0,500,0,255);
  var mousePositionY = map(mouseY,0,500,0,255);

  //map(value,left side of the canvas, right side of the canvas, RGB lower colour range,RGB upper range)
  console.log(mouseX);
  fill(0,0,255);
  blueSquare()
  fill(0,255,0);
  greenSquare()
  fill(255,0,0);
  redSquare()
  fill(255,255,0);
  yellowSquare()

  if (mouseX < 250 && mouseY < 250){
    fill(0,0,0);
    blueSquare()
  }

  if (mouseX > 250 && mouseX < 500 && mouseY > 0 && mouseY < 250 ){
    fill(0,0,0);
    redSquare()
  }

  if (mouseX > 0 && mouseX < 250 && mouseY > 250 && mouseY < 500){
    fill(0,0,0);
    greenSquare()

}
if (mouseX > 250 && mouseX < 500 && mouseY > 250 && mouseY < 500 ){
  fill(0,0,0);
  yellowSquare()
}
}


function blueSquare(){
  rect(0,0,250,250);
}

function redSquare(){
  rect(250,0,250,250);
}

function greenSquare(){
  rect(0,250,250,250);
}

function yellowSquare(){
  rect(250,250,250,250);
}
