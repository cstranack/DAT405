
//WORKING CODE
//assigning variables

let data;
let attackFatalData;
let attackDates;
let apiKey = "d377299c554f35dfbdca7e8ed2bb1182d984fe308075503871c6e752";
let numberOfCases = "150";
let year = "2017";
let monthLocation = 150;
let monthArrayString = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let attackLocation = 600;
let pointPos = 0;
let squaresArray = [];
let inputYear;
let greeting;
let header;
let count;
let button;
let jan = 0;
let feb = 0;
let mar = 0;
let apr = 0;
let may = 0;
let jun = 0;
let jul = 0;
let aug = 0;
let sep = 0;
let oct = 0;
let nov = 0;
let dec = 0;


function preload(){
  //loop();
  //setting up the canvas
  createCanvas(1000,700);
  //count = 0
  header = createElement("h1", "Shark Attack Graph");
  header.position(10, 10);

  inputYear = createInput();
  inputYear.position(360, 80);

  button = createButton("submit");
  button.position(inputYear.x + inputYear.width, 80);
  button.mousePressed(greet);


  greeting = createElement("h2", "Choose a year from 2012 to 2018: ");
  greeting.position(10, 55);

  //while(year = " "){

  //}
    if(year > 2018 || year < 2012){
      console.log("year invalid");
    }

  //once the button is pressed this function is entered.
  function greet() {
    year = inputYear.value();
    greeting.html("Year: "+ year);
    inputYear.value(" ");

    //defining the url with the api key
    let url = "https://data.opendatasoft.com/api/records/1.0/search/?dataset=global-shark-attack%40public-us&rows=" + numberOfCases + "&sort=date&refine.year=" + year + "&apikey=" + apiKey;
    //retrieving data from JSON file and storing it in variable 'data'.
    data = loadJSON(url);
    console.log("hello");
    //return
  }

}




function setup() {

  //initialising arrays
  let attackFatalynArray= [];
  let attackYearArray = [];
  let attackDatesArray = [];
  let splitDatesArray = [];
  let attacksPerMonthArray = [];
  let decFatalArray = [];
  let novFatalArray = [];
  let octFatalArray = [];
  let sepFatalArray = [];
  let augFatalArray = [];
  let julFatalArray = [];
  let junFatalArray = [];
  let mayFatalArray = [];
  let aprFatalArray = [];
  let marFatalArray = [];
  let febFatalArray = [];
  let janFatalArray = [];



  console.log(data);
  console.log("records: " + data.records);
  //collecting all the data I need for my visulisation
  //assigning the necessary data to arrays
  for(let caseNumber = 0; caseNumber < data.records.length; caseNumber++){

    attackFatalData = (data.records[caseNumber].fields.fatal_y_n);
    attackYear = (data.records[caseNumber].fields.year);
    attackDates = (data.records[caseNumber].fields.date);

    //appending each value to my arrays
    append(attackFatalynArray, attackFatalData);
    append(attackYearArray, attackYear);
    append(attackDatesArray, attackDates);

    //splitting the string up into a temporary array
    //then extracting the month and saving that into a new array
    splitDatesArray = split(attackDatesArray[caseNumber],"-");
    append(attacksPerMonthArray, splitDatesArray[1]);

    //sorting number of attacks into the month they occured in
    if(attacksPerMonthArray[caseNumber] == "01"){
      jan = jan + 1
    }
    else if(attacksPerMonthArray[caseNumber] == "02"){
      feb = feb + 1
    }
    else if(attacksPerMonthArray[caseNumber] == "03"){
      mar = mar + 1
    }
    else if(attacksPerMonthArray[caseNumber] == "04"){
      apr = apr + 1
    }
    else if(attacksPerMonthArray[caseNumber] == "05"){
      may = may + 1
    }
    else if(attacksPerMonthArray[caseNumber] == "06"){
      jun = jun + 1
    }
    else if(attacksPerMonthArray[caseNumber] == "07"){
      jul = jul + 1
    }
    else if(attacksPerMonthArray[caseNumber] == "08"){
      aug = aug + 1
    }
    else if(attacksPerMonthArray[caseNumber] == "09"){
      sep = sep + 1
    }
    else if(attacksPerMonthArray[caseNumber] == "10"){
      oct = oct + 1
    }
    else if(attacksPerMonthArray[caseNumber] == "11"){
      nov = nov + 1
    }
    else if(attacksPerMonthArray[caseNumber] == "12"){
      dec = dec + 1
    }

  }

  console.log(attackFatalynArray);
  //console.log(attackYearArray);
  //console.log(attackDatesArray);
  console.log(attacksPerMonthArray);
  console.log(jan,feb,mar,apr,may,jun,jul,aug,sep,nov,dec);

  //Creating arrays for each month from the attack data set
  //I organise the data this was so I now know how many of the attacks where fatal.

  decFatalArray = subset(attackFatalynArray,0,dec);
  console.log("Dec: " + decFatalArray);
  novFatalArray = subset(attackFatalynArray,dec,nov);
  console.log("Nov: " + novFatalArray);
  octFatalArray = subset(attackFatalynArray,nov,oct);
  console.log("Oct: " + octFatalArray);
  sepFatalArray = subset(attackFatalynArray,oct,sep);
  console.log("Sep: " + sepFatalArray);
  augFatalArray = subset(attackFatalynArray,sep,aug);
  console.log("Aug: " + augFatalArray);
  julFatalArray = subset(attackFatalynArray,aug,jul);
  console.log("Jul: " + julFatalArray);
  junFatalArray = subset(attackFatalynArray,jul,jun);
  console.log("Jun: " + junFatalArray);
  mayFatalArray = subset(attackFatalynArray,jun,may);
  console.log("May: " + mayFatalArray);
  aprFatalArray = subset(attackFatalynArray,may,apr);
  console.log("Apr: " + aprFatalArray);
  marFatalArray = subset(attackFatalynArray,apr,mar);
  console.log("Mar: " + marFatalArray);
  febFatalArray = subset(attackFatalynArray,mar,feb);
  console.log("Feb: " + febFatalArray);
  janFatalArray = subset(attackFatalynArray,feb,jan);
  console.log("Jan: " + janFatalArray);


  console.log(decFatalArray.length);





}

function draw(){

  let monthArrayVariable = [jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec];

  //drawing the graph
  line(150,600,150,100);
  line(150,600,810,600);

  //adding the graph values
  while(monthLocation < 820){
    fill(0,200,200);
    for(let x = 0; x < monthArrayString.length; x++){
      textSize(20);
      text(monthArrayString[x],monthLocation,620);
      ellipse(monthLocation,601,5,5);
      monthLocation = monthLocation + 60;
    }
  }

  while(attackLocation > 150){
    fill(0,200,200);
    for(let y = 0; y < 26; y++){
      textSize(10);
      text(y,130, attackLocation);
      ellipse(150,attackLocation,5,5);
      attackLocation = attackLocation - 20;

      }
    }
    fill(random(255),random(255),random(255));

    //plotting the graph and connect the points with lines
    //change coordinates 0,0 to match coordinates 0,0 on the graph
    push()
    translate(150,600); //point 0,0 on the graph
    fill(random(255),random(255),random(255));
    stroke(3);
    while(pointPos < 60){
      for(let z = 0; z < monthArrayVariable.length; z++){
        //this line connects the dots by using the current vaules and the values of the
        //next point to create the connection.
        line(pointPos,monthArrayVariable[z]*-20,pointPos + 60,monthArrayVariable[z + 1]*-20);
        //this line plots the points using the number of attacks determined by the index
        //number of the "monthArrayVariable" and the "pointPos" which increases by 60
        //determining which month the attack occured in.
        ellipse(pointPos,monthArrayVariable[z]*-20,10,10);
        pointPos = pointPos + 60;
      }
    }
    //console.log(squaresArray);
    //fill(0,0,200,20);
    //noStroke();
    /*let mousePositionXJan = map(mouseX,0,-60,0,20);
    let mousePositionYJan = map(mouseY,0,-60,0,20);
    rect(mousePositionXJan,mousePositionYJan,-20,60)

    //rect(pointPos,-500,60,500);
    //loop()
    //rect(0,-500,60,50);
    fill(0,0,200,20);
    noStroke();
    //noLoop();
    //rect(0,-500,60,500);
    if (mouseX <=0 && mouseX >= -500){ //&& mouseY <= 60 && mouseY >= 500){
      rect(0,-500,60,500);
    }
    */
    pop()
 }
