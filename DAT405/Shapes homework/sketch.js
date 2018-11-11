
function setup(){
  createCanvas(1000,1000);
  frameRate(10);
  //noStroke();
}

function draw(){
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


function customShape2(){
  let xCoordinate = (random(1000));
  let yCoordinate = (random(1000));
  let size = 50;
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
  fill(250, 175, 200);
  ellipse(xCoordinate, yCoordinate, 50);
  fill(75 , 200 , 200);
  triangle(xCoordinate + 10, yCoordinate + 20, xCoordinate, yCoordinate, xCoordinate -10 , yCoordinate +20);
  //fill(200,75,200);

  //triangle(xCoordinate + 20, yCoordinate + 30, xCoordinate, yCoordinate, xCoordinate -20 , yCoordinate +30);
  //triangle(30, 75, 58, 20, 86, 75)
}
