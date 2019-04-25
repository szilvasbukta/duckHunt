let score = 0,
    life = 11;

function randomInt(start, end) {
    return Math.floor(Math.random() * (1+end-start))+start;
}


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


function duckMovement(duck) {
    let maxWidth = document.getElementById("container").clientWidth,
        maxHeight = document.getElementById("container").clientHeight,
        duckWidth = duck.clientWidth,
        duckHeight = duck.clientHeight,
        parameters = randomPos(duck, duckWidth, duckHeight),
        xPos = 0,
        yPos = 0;


    setInterval(function () {
        maxWidth = document.getElementById("container").clientWidth;
        maxHeight = document.getElementById("container").clientHeight;
        if (xPos >= maxWidth - duckWidth || xPos <= 0 || yPos + duckHeight >= maxHeight) {
            lifePoint();
            parameters = randomPos(duck, duckWidth, duckHeight);
            xPos = parameters[0];
            yPos = parameters[1];
        } else {
            xPos += parameters[2];
            yPos += parameters[3];
            duck.style.left = xPos + "px";
            duck.style.bottom = yPos + "px";
        }
    }, 5);


    duck.addEventListener('click', function () {
        xPos = maxWidth;
        scorePoint();
    });
}


function randomPos(duck, duckWidth, duckHeight) {
    let maxWidth = document.getElementById("container").clientWidth,
        maxHeight = document.getElementById("container").clientHeight,
        side = randomInt(0, 1),
        xPos, yPos, x, y;
        switch (side) {
            case 0:
                xPos = randomInt(1, maxWidth-duckWidth-1);
                yPos = duckHeight;
                x = [-1, 0, 1][randomInt(0, 2)];
                y = 1;
                break;
            case 1:
                let r = randomInt(0, 1);
                xPos = [1, maxWidth-duckWidth-1][r];
                yPos = randomInt(duckHeight, maxHeight-duckHeight*2-1);
                x = [1, -1][r];
                y = 0;
                break;
        }

    return [xPos, yPos, x, y];
}


function duck() {
    let duckDiv = document.getElementById("duck");
    duckMovement(duckDiv);
}

function lifePoint() {
    life -= 1;
    let lifeBoard = document.getElementById("lifePoint"),
        newLifeBoard = "Lives: "+life;
    lifeBoard.innerHTML = newLifeBoard;
}

function scorePoint() {
    score += 1;
    life += 1;
    let scoreBoard = document.getElementById("score"),
        PlifeBoard = document.getElementById("lifePoint"),
        newScoreBoard = "Scores: "+ score,
        PnewLifeBoard = "Lives: "+ life;
    scoreBoard.innerHTML = newScoreBoard;
    PlifeBoard.innerHTML = PnewLifeBoard;
}


function main() {
    window.onload = function () {
        duck();
        dog();
    };
}


main();
