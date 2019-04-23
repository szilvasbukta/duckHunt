window.onload = function() {
var xPos = 0;
var yPos = 0;
//our box element
var box = document.getElementById("box");
var t = setInterval(move, 25);

// starting position
function move() {
  if(xPos >= 150) {
    xPos -= 150;
    yPos -= 150
  }
  else {
    xPos += 1;
    yPos += 1;
    box.style.left = xPos+"px";
    box.style.top = yPos+"px";
  }
}
}