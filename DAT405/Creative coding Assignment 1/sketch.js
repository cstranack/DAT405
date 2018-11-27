//CLAIRE STRANACK - creative coding assignment 1
//declaring my variables
let angle = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
//changing the value of the angles
//changes the starting positision of the circles
let angle5 = 180;
let angle6 = 180;
let angle7 = 180;
let angle8 = 180;
let backgroundSize = 50;

//setting up my canvas and modes
function setup(){
  createCanvas(594,841);
  angleMode(DEGREES);
  rectMode(CENTER);
}

//within the draw function I call all the functions
//in order for them to be executed
function draw(){
//background(255,255,255);
  drawCircles();
  drawBorder();
  drawTracks();
  drawCircles2();
  backgroundColour();
}

//this function draws 2 sets of the rotating cirles
// that start with angle set to 0
function drawCircles(){
  noStroke();
  //push and pop confine the set translation between the 2 functions
  push();
  //here the translate function sets the 0,0 coordinantes
  //to the centre of the canvas
  //so every shape with the coordiantes 0,0 will be centeral
  translate(width/2,height/2);
  //random colours are generated continuously
  fill(random(255),random(255),random(255),50);
  stroke(0);
  rotate(angle);
  ellipse(50,50,50,50);
  //rotating by -angle*2 allows the shapes
  //to rotate in the opposite direction
  rotate(-angle*2);
  ellipse(50,50,50,50);
  angle = angle + 2;
  pop();

  push();
  stroke(0);
  fill(random(255),random(255),random(255),50);
  translate(width/2,height/2);
  rotate(angle2);
  ellipse(85,85,50,50);
  rotate(-angle2*2);
  ellipse(85,85,50,50);
  angle2 = angle2 + 4;
  pop();

  push();
  fill(random(255),random(255),random(255),50);
  stroke(0);
  translate(width/2,height/2);
  rotate(angle3);
  ellipse(120,120,50,50);
  rotate(-angle3*2);
  ellipse(120,120,50,50);
  angle3 = angle3 + 6;
  pop();

  push();
  fill(random(255),random(255),random(255),50);
  stroke(0);
  translate(width/2,height/2);
  rotate(angle4);
  ellipse(155,155,50,50);
  rotate(-angle4*2);
  ellipse(155,155,50,50);
  angle4 = angle4 + 8;
  pop();

  }

//this function draws 2 sets of the rotating cirles
// that start with angle set to 180
function drawCircles2(){
  noStroke();
  push();
  translate(width/2,height/2);
  fill(random(255),random(255),random(255),50);
  stroke(0);
  rotate(angle5);
  ellipse(50,50,50,50);
  rotate(-angle5*2);
  ellipse(50,50,50,50);
  angle5 = angle5 + 2;
  pop();

  push();
  stroke(0);
  fill(random(255),random(255),random(255),50);
  translate(width/2,height/2);
  rotate(angle6);
  ellipse(85,85,50,50);
  rotate(-angle6*2);
  ellipse(85,85,50,50);
  angle6 = angle6 + 4;
  pop();

  push();
  fill(random(255),random(255),random(255),50);
  stroke(0);
  translate(width/2,height/2);
  rotate(angle7);
  ellipse(120,120,50,50);
  rotate(-angle7*2);
  ellipse(120,120,50,50);
  angle7 = angle7 + 6;
  pop();

  push();
  fill(random(255),random(255),random(255),50);
  stroke(0);
  translate(width/2,height/2);
  rotate(angle8);
  ellipse(155,155,50,50);
  rotate(-angle8*2);
  ellipse(155,155,50,50);
  angle8 = angle8 + 8;
  pop();
}

//this function draws the 'tracks' or still circles
// centred in the middle of the canvas
  function drawTracks(){
    push();
    fill(0,0,0,10);
    translate(width/2,height/2);
    ellipse(0,0,50,50)
    ellipse(0,0,90,90);
    ellipse(0,0,190,190);
    ellipse(0,0,290,290);
    ellipse(0,0,390,390);
    ellipse(0,0,490,490);
    pop();
}

//this function draws a serise of lines
// which indicate the border of the canvas
function drawBorder(){
  stroke(100);
  line(0,0,594,0);
  line(0,0,0,841);
  line(0,839,592,839);
  line(592,0,592,839);

}

//the function controls the colour changing 'background'
//the background will change opacity depending on the location
//of the mouse on the canvas
function backgroundColour(){

  var mouse = map(mouseY, 0, width, 255, 0);
  //Two different values are created. The opacity of the background
  // is controlled by the mouse variable created before
  var color1 = color(0,0,0,255);
  var color2 = color(200, 162, 200, mouse);

  //The nested loop creates the background, and according to the
  //position of the mouse the background colour will change opacity
  for (let y = 0; y < height + 50; y+=backgroundSize) {
    for (let x = 0; x < width+ 50; x+=backgroundSize) {
      //checks the coordinates of the mouse in relation to its coordinantes
      //on the background, this then determinds the inensity of the
      //background colour
      if(mouseX>x && mouseX<x && mouseY>y && mouseY<y) fill(color1);
      else fill(color2);
      rect(x, y, backgroundSize, backgroundSize);
    }
  }
}
