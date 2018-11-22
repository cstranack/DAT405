
var flag = "no";
var mouseCoordX;
var mouseCoordY;

function setup(){
    createCanvas(594,841);
    fill(random(255),0,0,50);
    frameRate(15);

}

var angle = 0;
var angle2 = 0;
var angle3 = 0;
var angle4 = 0;
var angle5 = 0;

  function draw(){
    drawCirles()
  }

function drawCirles(){
    if(angle<TWO_PI){

      if(flag == "no"){
        mouseCoordX = mouseX;
        mouseCoordY = mouseY;
        console.log(mouseCoordX);
        console.log("yes");
        flag = "yes";
        }


      else if(flag == "yes"){

        stroke(180);
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



        background(255,255,255);
        size = 50
        ellipse(posXCircleCoord,posYCircleCoord,size,size);
        ellipse(negXCircleCoord,negYCircleCoord,size,size);
        ellipse(posXCircleCoord2,posYCircleCoord2,size,size);
        ellipse(negXCircleCoord2,negYCircleCoord2,size,size);
        ellipse(negXCircleCoord3,negYCircleCoord3,size,size);
        ellipse(posXCircleCoord3,posYCircleCoord3,size,size);
        ellipse(negXCircleCoord4,negYCircleCoord4,size,size);
        ellipse(posXCircleCoord4,posYCircleCoord4,size,size);



        fill(random(255),random(255),random(255),20);
        ellipse(posXCircleCoord,posYCircleCoord + 10,20,20);
        ellipse(posXCircleCoord2,posYCircleCoord2 + 10,20,20);
        ellipse(negXCircleCoord3 - 10,negYCircleCoord3 -10,20,20);
        ellipse(posXCircleCoord3 - 10,posYCircleCoord3- 10,20,20);


        angle = angle + 0.1;
        angle2 = angle2 + 0.2;
        angle3 = angle3 + 0.3;
        angle4 = angle4 + 0.4;
        angle5 = angle5 + 0.5;




        }

    }

    else if(angle => TWO_PI){
      background("clear");
      angle = 0;
      mouseCoordX = mouseX;
      mouseCoordY = mouseY;
    }
}
