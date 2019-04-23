window.onload = function () {
    let xPos = 0,
        yPos = 0,
        duck = document.getElementById("duck");
    setInterval(move, 25);

    function move() {
        if (xPos >= 150) {
            xPos -= 150;
            yPos -= 150
        } else {
            xPos += 1;
            yPos += 1;
            duck.style.left = xPos + "px";
            duck.style.top = yPos + "px";
        }
    }

    let xPosdog = 0,
        yPosdog = 0,
        right = true,
        dog = document.getElementById("dog");
    setInterval(movedog, 1);

    function movedog() {
        let maxWidth = document.querySelector("#container").clientWidth,
            dogWidth = document.querySelector("#dog").clientWidth;
        if (xPosdog >= maxWidth - dogWidth){
            right = false;
            document.getElementById("dog").style.backgroundImage = "url(static/images/dogwalkleft.png)";
        }
        else if (xPosdog <= 0) {
            document.getElementById("dog").style.backgroundImage = "url(static/images/dogwalkright.png)";
            right = true;
        }
        if (!right) {
            xPosdog -= 1;
            dog.style.left = xPosdog + "px";
            dog.style.bottom = yPosdog + "px";
        }
        else {
            xPosdog += 1;
            dog.style.left = xPosdog + "px";
            dog.style.bottom = yPosdog + "px";
        }
    }
};
