
// Declaring my variables
//flag has a boolean value that will either be "yes" or "no"
var flag = false;
//these variables have to be declared here but not assigned to a value
var mouseCoordX;
var mouseCoordY;
// these variables determind at what degrees each of the cirles
//turn around the centre point at each run of the program
var angle = 0;
var angle2 = 0;
var angle3 = 0;
var angle4 = 0;
var angle5 = 0;

//initialising the program
function setup(){
  //determining the canvas size, in pixels
    createCanvas(594,841);
  //All the shapes will be the same colour untill
  //told otherwise
    fill(random(255),0,0,50);
  //set the frame rate determinds the rate of 'movement'
    frameRate(15);
}
  //the draw fucntion will be repeated continuously
  function draw(){
    //the drawCirles function is being called here
    drawCirles();
    drawBorder();
  }

function drawBorder(){
  stroke(100);
  line(0,0,594,0);
  line(0,0,0,841);
  line(0,839,592,839);
  line(592,0,592,839);

}

function drawCirles(){
  //assign the coordiantes to variables
  mouseCoordX = mouseX;
  mouseCoordY = mouseY
  //TWO_PI is the circumference of a circle
  //if 'angle'(which is the slowest moving circle)
  //is smaller than TWO_PI then the circles are drawn
    if(angle<TWO_PI){
      //this part of the program insures the program
      //has coordiantes to draw the circles
      //flag will == no unless the loop has been run through once already
      if(flag == false){

        //flag now == yes as coordinates have been assigned
        flag = true;
        }

      //when flag == yes this part of the loop in entered
      else if(flag == true){
        // setting stroke
        stroke(180);
        //the coordinates of the points around the centre
        //are determind here
        //as I have 4 sets or 8 circles rotating around the
        //centre, I require 2 sets of coordinate per circle
        // the negative and positive coordinates vwill be on
        //opposite sides of the centre point.
        var negXCircleCoord = mouseCoordX - cos(angle2)*50;
        var negYCircleCoord = mouseCoordY - sin(angle2)*50
        var posXCircleCoord = mouseCoordX + cos(angle2)*50;
        var posYCircleCoord = mouseCoordY + sin(angle2)*50;
        var negXCircleCoord2 = mouseCoordX - cos(angle3)*100;
        var negYCircleCoord2 = mouseCoordY - sin(angle3)*100;
        var posXCircleCoord2 = mouseCoordX + cos(angle3)*100;
        var posYCircleCoord2 = mouseCoordY + sin(angle3)*100;
        var negXCircleCoord3 = mouseCoordX - cos(angle4)*150;
        var negYCircleCoord3 = mouseCoordY - sin(angle4)*150;
        var posXCircleCoord3 = mouseCoordX + cos(angle4)*150;
        var posYCircleCoord3 = mouseCoordY + sin(angle4)*150;
        var negXCircleCoord4 = mouseCoordX - cos(angle5)*200;
        var negYCircleCoord4 = mouseCoordY - sin(angle5)*200;
        var posXCircleCoord4 = mouseCoordX + cos(angle5)*200;
        var posYCircleCoord4 = mouseCoordY + sin(angle5)*200;
        //sets background to white before drawing or re-drawing
        //the circles
        background(255,255,255);
        size = 50
        fill(random(255),random(255),random(255),20);
        ellipse(posXCircleCoord,posYCircleCoord,size,size);
        ellipse(negXCircleCoord,negYCircleCoord,size,size);
        ellipse(posXCircleCoord2,posYCircleCoord2,size,size);
        ellipse(negXCircleCoord2,negYCircleCoord2,size,size);
        ellipse(negXCircleCoord3,negYCircleCoord3,size,size);
        ellipse(posXCircleCoord3,posYCircleCoord3,size,size);
        ellipse(negXCircleCoord4,negYCircleCoord4,size,size);
        ellipse(posXCircleCoord4,posYCircleCoord4,size,size);

        fill(random(255),random(255),random(255),50);
        ellipse(negXCircleCoord,negYCircleCoord,20,20);
        ellipse(posXCircleCoord,posYCircleCoord,20,20);
        ellipse(negXCircleCoord2,negYCircleCoord2,20,20);
        ellipse(posXCircleCoord2,posYCircleCoord2,20,20);
        ellipse(negXCircleCoord3,negYCircleCoord3,20,20);
        ellipse(posXCircleCoord3,posYCircleCoord3,20,20);
        ellipse(negXCircleCoord4,negYCircleCoord4,20,20);
        ellipse(posXCircleCoord4,posYCircleCoord4,20,20);

        fill(0,0,0,0);
        ellipse(mouseCoordX,mouseCoordY, 50,50);
        ellipse(mouseCoordX,mouseCoordY, 150,150);
        ellipse(mouseCoordX,mouseCoordY, 250,250);
        ellipse(mouseCoordX,mouseCoordY, 350,350);
        ellipse(mouseCoordX,mouseCoordY, 450,450);

        angle = angle + 0.1;
        angle2 = angle2 + 0.2;
        angle3 = angle3 + 0.3;
        angle4 = angle4 + 0.4;
        angle5 = angle5 + 0.5;

        line(0,0, mouseCoordX , mouseCoordY);
        line(width,height, mouseCoordX , mouseCoordY);
        line(width,0, mouseCoordX, mouseCoordY);
        line(0,height, mouseCoordX , mouseCoordY);
        line(width/2,0, mouseCoordX , mouseCoordY,);
        line(width/2,height, mouseCoordX , mouseCoordY,);
        line(0,height/2, mouseCoordX , mouseCoordY,);
        line(width,height/2, mouseCoordX , mouseCoordY,);
        }
    }
    else if(angle => TWO_PI){
      background("clear");
      angle = 0;

    }
}
