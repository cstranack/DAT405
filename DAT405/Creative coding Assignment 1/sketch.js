function setup(){
    createCanvas(1000,800);
    //background(0,0,0);
}

function drawLines(){
  for(i=0; i<1001; i = i + 20){
    if (mouseIsPressed){
      stroke(random(255),random(255),random(255));
      line(0,i, mouseX, mouseY);
      line(i,0, mouseX, mouseY);
      line(i,1000, mouseX, mouseY);
      line(1000,i, mouseX, mouseY);
    }
    else{
      stroke(0,0,0);
      line(0,i, mouseX, mouseY);
      line(i,0, mouseX, mouseY);
      line(i,1000, mouseX, mouseY);
      line(1000,i, mouseX, mouseY);
  }
  }
}

function drawCentreCircle(){
  fill(180);
  noStroke();
  ellipse(mouseX,mouseY,60,60);
}

function drawStillCirles(){
  var xCoord = mouseX + 30;
  var yCoord = mouseY + 30;
  var xCoord2 = mouseX - 30;
  var yCoord2 = mouseY - 30;
  var size = 20;
  var fade = 100;
  noStroke();
  for(x = 0; x<1000; x = x+30){
    fade = fade -5;
    fill(240,250,0,fade);
    ellipse(xCoord + x, yCoord + x,size,size);
    fill(250,200,0,fade);
    ellipse(xCoord2 - x, yCoord2 - x,size,size);
    size = size + 5;
  }
}


function draw(){
  //background(180);
  drawLines();
  drawCentreCircle();
  //drawStillCirles();



}
