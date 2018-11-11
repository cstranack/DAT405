
function setup(){
  createCanvas(1500,1500);
  frameRate(10);

}

function draw(){
  //each arrow key is assigned to a different function
  //each function draws a different shape
  if (keyIsDown(LEFT_ARROW)){
    customShape1();
  }
  if (keyIsDown(RIGHT_ARROW)){
    customShape2();
  }
  if (keyIsDown(UP_ARROW)){
    customShape3();
  }

}


function customShape1(){
//drawing out the shapes, each value is random
  //fill(random(255),random(0),random(255),random(500));
  let xCoordinate = (random(1000));
  let yCoordinate = (random(1000));
  let size = 100;
  //this shape is a serise of circles inside eachother
  fill(255,255,255);
  ellipse(xCoordinate, yCoordinate, size);
  fill(255,150,200);
  ellipse(xCoordinate, yCoordinate, size - 10);
  fill(255,255,255);
  ellipse(xCoordinate, yCoordinate, size - 20);
  ellipse(xCoordinate, yCoordinate, size - 35);
  stroke(255,150,200);
  strokeWeight(5);
  ellipse(xCoordinate, yCoordinate, size - 55);
  stroke(0);
  strokeWeight(1);
  fill(0,255,255);
  ellipse(xCoordinate, yCoordinate, size - 75);

}


function customShape2(){
  let xCoordinate = (random(1000));
  let yCoordinate = (random(1000));
  let size = 50;
  //this shape is a series of squares inside eachother
  fill(0, 200, 255);
  rect(xCoordinate, yCoordinate, size, size);
  fill(200, 200, 255);
  rect(xCoordinate+5, yCoordinate+5, size - 10, size -10);
  fill(255,255,255);
  rect(xCoordinate+10, yCoordinate+10, size- 20, size- 20);

}

function customShape3(){
  let xCoordinate = (random(1000));
  let yCoordinate = (random(1000));
  //this shape is a circle overlapping a triangle
  fill(250, 175, 200);
  ellipse(xCoordinate, yCoordinate, 50);
  fill(75 , 200 , 200);
  triangle(xCoordinate + 20, yCoordinate + 30, xCoordinate, yCoordinate, xCoordinate -20 , yCoordinate +30);

}
