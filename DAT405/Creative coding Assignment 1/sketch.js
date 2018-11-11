/*
//function setup() {
  //createCanvas(500,500)
  function draw() {


      if (keyIsPressed === true) {
        fill(255);
      } else {
        fill(random(255),random(255),random(255));
      }
        rect(25, 25, 50, 50);
    }


  frameRate(20);
  //rectMode(CENTER);
}

function draw() {
  var step = frameCount % 20;
  background(200);
  // Equivalent to translate(x, y);
  applyMatrix(1, 0, 0, 1, 40 + step, 50);
  rect(0, 0, 50, 50);



  frameRate(10);
rectMode(CENTER);
}

let size = 50;
let height = 0;
function setup() {
//test
  createCanvas(1000,1000);
  noLoop();
  }

//loop in a loop
  function draw() {

    fill(255,200,200);
    //edit
    for(let i = 0; i <5; i++){
      for(let x = 0; x < 10; x++){
        rect(size*x, height, size, size);
        console.log("x: "+x+", height:" +height);
      }
        height = height + 100
      }
//test
}

*/
function draw() {
var step = frameCount % 20;
background(200);
translate(50, 50);
// Equivalent to scale(x, y);
applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
rect(0, 0, 50, 50);

}
