// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

var u;
var l;
var a;
var mods = [];
var x;
var y;
var count;

// Keep track of our socket connection
var socket;

var cnv;

function centerCanvas() {
  var x = (windowWidth - width)/2 ;
  var y = (windowHeight - height)/2 ;
  cnv.position(x, y);





}



function setup() {

  
  
  //createCanvas(windowWidth, windowHeight);
 

  cnv = createCanvas(700,1334);
  centerCanvas();
  cnv.parent('sketch-holder');
   
  background(0,0,0);
  textSize(20); // sets the font size
  fill(200, 20, 100,);
  //textFont('Purisa'); // will automatically work with any font on your local machine
  //textStyle(BOLD); // takes NORMAL, ITALIC or BOLD
  text(" WELCOME TO ET AMBO TAKEOVER ", 150, 400);
  text("LET'S  PAINT THE CANVAS TOGETHER!", 130, 730);
  


  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('https://my-websocketapp.herokuapp.com/');
  // We make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('mouse',
    // When we receive data
    function(data) {
      // Draw a blue circle
      fill(200, 20, 120);
      noStroke();
      stroke(255, 204, 0);
      ellipse(data.x, data.y, 50,50);
    }
  );
}

function draw() {
  textSize(20);
  
}

function mouseDragged() {
  // Draw some white circles
  fill(random(255),random(255),random(255));
  //noStroke();
  stroke(255, 204, 0);

  ellipse(mouseX,mouseY,random(45),random(45));
  // Send the mouse coordinates
  sendmouse(mouseX,mouseY);
}

// Function for sending to the socket
function sendmouse(xpos, ypos) {

  
  // Make a little object with  and y
  var data = {
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}



function windowResized() {
  centerCanvas();
}
