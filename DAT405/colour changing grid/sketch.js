let size = 50;
let height = 0;

var mousePositionXIncrease = map(mouseX,0,width,0,255);
//var mousePositionYIncrease = map(mouseY,0,width,0,255);
// mousePositionXDecrease = map(mouseX,0,width,255,0);
//var mousePositionYDecrease = map(mouseY,0,width,255,0);

var color1 = color(255, 200, 200, mousePositionXIncrease);
//var colour2 = color(0,255,0,mousePositionYIncrease);
//var colour3 = color(255,255,0,mousePositionXDecrease);
//var colour4 = color(0,255,255,mousePositionYDecrease);


function setup() {
//test
  createCanvas(500,500);
  noLoop();
  }
//
//loop in a loop
  function draw() {
    fill(color1);
    rect(50,50,50,50);
    //edit
    /*for(let i = 0; i <10; i++){
      for(let x = 0; x < 10; x++){
        rect(size*x, height, size, size);
        console.log("x: "+x+", height:" +height);
      }
        height = height + 50
      }*/
//test
  }



      //drawGrid();

    //}

//function drawGrid(){
