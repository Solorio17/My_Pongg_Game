var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;

window.onload = function(){
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  drawEverything();
  var framesPerSecond = 50;
  setInterval(function(){objectMovements(); drawEverything()},
  1000/framesPerSecond);
}

function objectMovements(){
    ballX = ballX + ballSpeedX;
    ballSpeedX = ballSpeedX + 1;

    if(ballX > canvas.width){
      ballSpeedX = -ballSpeedX;
    }

    if(ballX < 0){
      ballSpeedX = -ballSpeedX;
    }
}

function colorRect(leftX,topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}

function drawEverything(){
  colorRect(0,0, canvas.width,canvas.height,'black');
  colorRect(ballX,78,20,20,'green');
  colorRect(6,300,15,110,'white');
  colorRect(979,288,15,110,'white');
}
