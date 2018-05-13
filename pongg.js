var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;

window.onload = function(){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  drawEverything();
  var framesPerSecond = 65;
  setInterval(function(){objectMovements(); drawEverything()},
  1000/framesPerSecond);
}

function objectMovements(){
    ballX = ballX + ballSpeedX;
    ballSpeedX = ballSpeedX + 1;
}


function drawEverything(){
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0, canvas.width,canvas.height);

  canvasContext.fillStyle = 'green';
  canvasContext.fillRect(ballX,78,20,20);

  canvasContext.fillStyle = 'white';
  canvasContext.fillRect(6,300,15,110);

  canvasContext.fillStyle = 'white';
  canvasContext.fillRect(979,288,15,110);
}
