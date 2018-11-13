
function setup(){
  createCanvas(1500,1500);
}

function draw(){
  if (keyIsDown(LEFT_ARROW)){
    noStroke();
    fill(255,0,0,50);
    var size = random(200);
    rect(random(1000), random(1000), size, size);

  }

  if (keyIsDown(RIGHT_ARROW)){
    noStroke();
    fill(0,0,255,50);
    var size = random(200);
    rect(random(1000), random(1000), size, size);
  }

  if (keyIsDown(UP_ARROW)){
    noStroke();
    fill(0,255,0,50);
    var size = random(200);
    ellipse(random(1000),random(1000), size, size);
  }
}
