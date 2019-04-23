window.onload = function () {
    let xPos = 0,
        yPos = 0,
        duck = document.getElementById("duck"),
        t = setInterval(move, 25);

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
        dog = document.getElementById("dog"),
        time = setInterval(movedog, 1);

    function movedog() {
        let maxWidth = document.querySelector("#container").clientWidth,
            dogWidth = document.querySelector("#dog").clientWidth;
        if (xPosdog >= maxWidth - dogWidth){
        } else {
            xPosdog += 1;
            dog.style.left = xPosdog + "px";
            dog.style.bottom = yPosdog + "px";
        }
    }
};
