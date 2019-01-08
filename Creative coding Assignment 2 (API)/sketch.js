
//WORKING CODE
//assigning variables

let data, attackFatalData, attackDates;
let apiKey = "d377299c554f35dfbdca7e8ed2bb1182d984fe308075503871c6e752";
let numberOfCases = "150";
let year = " ";
let monthLocation = 150;
let monthArrayString = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let monthArrayVariable = []
let janFatalities = 0;
let febFatalities = 0;
let marFatalities = 0;
let aprFatalities = 0;
let mayFatalities = 0;
let junFatalities = 0;
let julFatalities = 0;
let augFatalities = 0;
let sepFatalities = 0;
let octFatalities = 0;
let novFatalities = 0;
let decFatalities = 0;
let yearFatalities = 0;
let attackLocation = 600;
let pointPos = 0;
let squaresArray = [];
let inputYear, greeting, header, button, img, img2;
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
  //Create and format the title.
  header = createElement("h1", "Shark Attack Graph");
  header.position(10, 10);
  //creating input box, so year can be entered.
  inputYear = createInput();
  inputYear.position(360, 80);
  //this creates the button so the year value enterd can be submitted.
  button = createButton("submit");
  button.position(inputYear.x + inputYear.width, 80);
  // when a value is entered the data is fetched via the "greet" function
  button.mousePressed(greet);

  greeting = createElement("h2", "Choose a year from 2012 to 2018: ");
  greeting.position(10, 55);


  //once the button is pressed this function is entered.
  function greet() {

    year = inputYear.value();
    greeting.html("Year: "+ year);
    inputYear.value(" ");

    //defining the url with the api key
    let url = "https://data.opendatasoft.com/api/records/1.0/search/?dataset=global-shark-attack%40public-us&rows=" + numberOfCases + "&sort=date&refine.year=" + year + "&apikey=" + apiKey;
    //retrieving data from JSON file and storing it in variable 'data'.
    data = loadJSON(url);
    //assigning images to variables to call in setup().
    img = loadImage('shark.png');
    img2 = loadImage('shark2.png');
  }
}

function setup() {
  //setting up the canvas, background and details like images.
  createCanvas(1500,1500);
  background(0,100,150,20);
  image(img, 750, 20);
  image(img2, 650, 1000);

  //initialising arrays to be used in setup().
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
  //Creating arrays for each month from the attack data set
  //I organise the data this was so I now know how many of the attacks where fatal.
  decFatalArray = subset(attackFatalynArray,0,dec);
  novFatalArray = subset(attackFatalynArray,dec,nov);
  octFatalArray = subset(attackFatalynArray,nov,oct);
  sepFatalArray = subset(attackFatalynArray,oct,sep);
  augFatalArray = subset(attackFatalynArray,sep,aug);
  julFatalArray = subset(attackFatalynArray,aug,jul);
  junFatalArray = subset(attackFatalynArray,jul,jun);
  mayFatalArray = subset(attackFatalynArray,jun,may);
  aprFatalArray = subset(attackFatalynArray,may,apr);
  marFatalArray = subset(attackFatalynArray,apr,mar);
  febFatalArray = subset(attackFatalynArray,mar,feb);
  janFatalArray = subset(attackFatalynArray,feb,jan);

  //counting how many fatal attacks there were per month of the selected year.
  //counting how many fatal attacking occured throughout the whole year.
  for(let a = 0; a<janFatalArray.length; a++){
    if(janFatalArray[a] == "Y"){
      janFatalities = janFatalities + 1;
      yearFatalities = yearFatalities + 1
      }
    }
  for(let ab = 0; ab<febFatalArray.length; ab++){
    if(febFatalArray[ab] == "Y"){
      febFatalities = febFatalities + 1;
      yearFatalities = yearFatalities + 1
      }
    }
  for(let ac = 0; ac<marFatalArray.length; ac++){
    if(marFatalArray[ac] == "Y"){
      marFatalities = marFatalities + 1;
      yearFatalities = yearFatalities + 1
      }
    }
  for(let ad = 0; ad<aprFatalArray.length; ad++){
    if(aprFatalArray[ad] == "Y"){
      aprFatalities = aprFatalities + 1;
      yearFatalities = yearFatalities + 1
      }
    }
  for(let ae = 0; ae<mayFatalArray.length; ae++){
    if(mayFatalArray[ae] == "Y"){
      mayFatalities = mayFatalities + 1;
      yearFatalities = yearFatalities + 1
      }
    }
  for(let af = 0; af<junFatalArray.length; af++){
    if(junFatalArray[af] == "Y"){
      junFatalities = junFatalities + 1;
      yearFatalities = yearFatalities + 1
      }
    }
  for(let ag = 0; ag<julFatalArray.length; ag++){
    if(julFatalArray[ag] == "Y"){
      julFatalities = julFatalities + 1;
      yearFatalities = yearFatalities + 1
      }
    }
  for(let ah = 0; ah<augFatalArray.length; ah++){
    if(augFatalArray[ah] == "Y"){
      augFatalities = augFatalities + 1;
      yearFatalities = yearFatalities + 1
      }
    }
  for(let ai = 0; ai<sepFatalArray.length; ai++){
    if(sepFatalArray[ai] == "Y"){
      sepFatalities = sepFatalities + 1;
      yearFatalities = yearFatalities + 1
      }
    }
  for(let aj = 0; aj<octFatalArray.length; aj++){
    if(octFatalArray[aj] == "Y"){
      octFatalities = octFatalities + 1;
      yearFatalities = yearFatalities + 1
      }
    }
  for(let ak = 0; ak<novFatalArray.length; ak++){
    if(novFatalArray[ak] == "Y"){
      novFatalities = novFatalities + 1;
      yearFatalities = yearFatalities + 1
      }
    }

  for(let al = 0; al<decFatalArray.length; al++){
    if(decFatalArray[al] == "Y"){
      decFatalities = decFatalities + 1;
      yearFatalities = yearFatalities + 1
      }
    }
}

function draw(){
  //noLoop to prevent the draw function continuosly drawing over itself.
  noLoop();
  //assinging values to this array.
  monthArrayVariable = [jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec];
  //drawing the graph axis
  line(150,600,150,100);
  line(150,600,810,600);
  //adding the graph values on the X axis
  while(monthLocation < 820){
    fill(0,200,200);
    for(let x = 0; x < monthArrayString.length; x++){
      textSize(20);
      text(monthArrayString[x],monthLocation,620);
      ellipse(monthLocation,601,5,5);
      monthLocation = monthLocation + 60;
    }
  }
  //adding the graph values on the Y axis
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
    //Push() and pop() contain the translation within these lines.
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
    //adding text to explain the data and the purpose of the visulisation
    textSize(20);
    noStroke();
    fill(0,100,200);
    //the varibles change depending on the year entered by the user at the start.
    text("In " + year + ", " + yearFatalities + " was the death count from shark attacks" ,0,60);
    text("In comparision, an estimate of 100 million sharks are killed by humans a year , thats roughly 11,000 per hour", 0, 90);
    text("this graphic  below shows the amount of attacks of humans in relation to the amount of sharks killed in " + year , 0, 120);
    //both the number of attacks per year and number of sharks killed on average are scaled down
    // so the are more manageable figures and are therefore easier to visulise.
    let numberOfAttacksPerYear = (data.records.length/2)
    let scaledDownSharkDeaths = (11000/10);
    let scaledDownSharkAttacks = (data.records.length/10);
    //cirles drawn, one representing the sharks killed each hour
    fill(0,100,200,50);
    ellipse(170,350,scaledDownSharkDeaths,scaledDownSharkDeaths);
    fill(255,255,255);
    //the other representing shark attacks occuring during chosen year.
    ellipse(170,350,scaledDownSharkAttacks,scaledDownSharkAttacks);
    fill(0,100,200);
    text("The Blue circle represents sharks kills PER HOUR on average.", 350,320);
    text("The white dot in the centre of the blue circle represents shark attacks IN ONE YEAR (" + year + ").", 350,350);
    textSize(15);
    text("REFRESH the page and enter a new year to view data from a different year", 0,600);
    pop()
 }
