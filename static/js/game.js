function dogAnimation(xPos, right) {
    let dog = document.getElementById("dog");

    if (right) {
        switch (xPos % 150) {
            case 0:
                dog.style.backgroundImage = "url(static/images/dogwalkright.png)";
                break;
            case 50:
                dog.style.backgroundImage = "url(static/images/dogwalkright2.png)";
                break;
            case 100:
                dog.style.backgroundImage = "url(static/images/dogwalkright3.png)";
                break;
        }
    } else {
        switch (xPos % 150) {
            case 0:
                dog.style.backgroundImage = "url(static/images/dogwalkleft.png)";
                break;
            case 50:
                dog.style.backgroundImage = "url(static/images/dogwalkleft2.png)";
                break;
            case 100:
                dog.style.backgroundImage = "url(static/images/dogwalkleft3.png)";
                break;
        }
    }
}


function duckMovement(duck) {
    let xPos = 0,
        yPos = 0;

    setInterval(function () {
        if (xPos >= 150) {
            xPos -= 150;
            yPos -= 150;
        } else {
            xPos += 1;
            yPos += 1;
            duck.style.left = xPos + "px";
            duck.style.top = yPos + "px";
        }
    }, 25);
}

function duckClick(duck) {
    duck.addEventListener('click', function () {
        alert("Duck clicked")
    });
}

function dogMovement() {
    let xPos = 0,
        right = true,
        dog = document.getElementById("dog"),
        dogWidth = document.querySelector("#dog").clientWidth;
    dog.style.bottom = 0 + "px";

    setInterval(function () {
        let maxWidth = document.querySelector("#container").clientWidth;
        if (xPos >= maxWidth - dogWidth) {
            right = false;
            dog.style.backgroundImage = "url(static/images/dogwalkleft.png)";
        } else if (xPos <= 0) {
            dog.style.backgroundImage = "url(static/images/dogwalkright.png)";
            right = true;
        }
        if (right) {
            xPos += 1;
            dog.style.left = xPos + "px";
            dogAnimation(xPos, right);
        } else {
            xPos -= 1;
            dog.style.left = xPos + "px";
            dogAnimation(xPos, right);
        }
    }, 5);
}


function dog() {
    dogMovement();
}


function duck() {
    let duckDiv = document.getElementById("duck");
    duckClick(duckDiv);
    duckMovement(duckDiv);
}


function main() {
    window.onload = function () {
        duck();
        dog();
    };
}


main();

