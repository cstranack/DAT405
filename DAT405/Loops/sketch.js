
let size = 50;
let height = 0;
function setup() {
//test
  createCanvas(500,500);
  noLoop();
  }
//
//loop in a loop
  function draw() {
    fill(255,200,200);
    //edit
    for(let i = 0; i <10; i++){
      for(let x = 0; x < 10; x++){
        rect(size*x, height, size, size);
        console.log("x: "+x+", height:" +height);
      }
        height = height + 50
      }
//test
  }
