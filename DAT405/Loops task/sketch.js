
let size = 50;
let size2 = 30
let height = 0;
function setup() {
//test
  frameRate(3);
  createCanvas(500,500);

  }
//
//loop in a loop
  function draw() {
    fill(255,200,200);
    for(let i = 0; i <10; i++){
      for(let x = 0; x < 10; x++){
        rect(size*x, height, size, size);
        //console.log("x: "+x+", height:" +height);
    }
    height = height + 50 }

      for(let i = 0; i <10; i++){
        for(let x = 0; x < 10; x++){
          fill(random(255),random(255),random(255));
          rect(size*x+10, size*i+10, size2, size2);

          //console.log("x: "+x+", height:" +height);
      }
    }
//test
  }
