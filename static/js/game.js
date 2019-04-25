let score = 0,
    life = 11,
    highScore = 0;

highScore = localStorage.getItem("highScore");


function randomInt(start, end) {
    return Math.floor(Math.random() * (1+end-start))+start;
}


function dogAnimation(dog, xPos, right) {

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
            dogAnimation(dog ,xPos, right); // arg[0] = dog new
        } else {
            xPos -= 1;
            dog.style.left = xPos + "px";
            dogAnimation(dog, xPos, right); // arg[0] = dog new
        }
    }, 5);
}


function dog() {
    dogMovement();
}


function duckAnimation(duckDiv, xPos, yPos, x, y, r) {
    switch (x) {
        case -1:
            switch (y) {
                case 0:
                    switch (xPos % 100) { // 0
                        case 0:
                            duckDiv.style.background = ["url(static/images/duckblueleft.png","url(static/images/duckleft.png"][r];
                            break;
                        case 50:
                            duckDiv.style.background = ["url(static/images/duckblueleft2.png)","url(static/images/duckleft2.png"][r];
                            break;
                    } break;
                case 1:
                    switch (yPos % 100) { // 0
                        case 0:
                            duckDiv.style.background = ["url(static/images/duckleftup.png)","url(static/images/duckblueleftup.png"][r];
                            break;
                        case 50:
                            duckDiv.style.background = ["url(static/images/duckleftup2.png)","url(static/images/duckblueleftup2.png"][r];
                            break;
                    } break;
            } break;
        case 0: // 180 Done
            switch (y) {
                case 0:
                    break; // there is no 0:0 dir
                case 1:
                    switch (yPos % 100) { // 0
                        case 0:
                            duckDiv.style.background = ["url(static/images/duckleftup.png)","url(static/images/duckrightup.png"][r];
                            break;
                        case 50:
                            duckDiv.style.background = ["url(static/images/duckleftup2.png)","url(static/images/duckrightup2.png"][r];
                            break;
                    } break;
            } break;
        case 1:
            switch (y) {
                case 0:
                    switch (xPos % 100) { // 0
                        case 0:
                            duckDiv.style.background = ["url(static/images/duckblueright.png","url(static/images/duckright.png"][r];
                            break;
                        case 50:
                            duckDiv.style.background = ["url(static/images/duckblueright2.png)","url(static/images/duckright2.png"][r];
                            break;
                    } break;
                case 1:
                    switch (yPos % 100) { // 0
                        case 0:
                            duckDiv.style.background = ["url(static/images/duckrightup.png)","url(static/images/duckbluerightup.png"][r];
                            break;
                        case 50:
                            duckDiv.style.background = ["url(static/images/duckrightup2.png)","url(static/images/duckbluerightup2.png"][r];
                            break;
                    } break;
            } break;
    }
}

function duckMovement(duck) {
    let maxWidth = document.getElementById("container").clientWidth,
        maxHeight = document.getElementById("container").clientHeight,
        duckWidth = duck.clientWidth,
        duckHeight = duck.clientHeight,
        parameters = randomPos(duck, duckWidth, duckHeight),
        xPos = parameters[0],
        yPos = parameters[1],
        x = parameters[2],
        y = parameters[3],
        r = parameters[4];


    setInterval(function () {
        maxWidth = document.getElementById("container").clientWidth;
        maxHeight = document.getElementById("container").clientHeight;
        if (xPos >= maxWidth - duckWidth || xPos <= 0 || yPos + duckHeight >= maxHeight) {
            lifePoint();
            if (life <= 0) {
                window.location.href = "/"
            }
            parameters = randomPos(duck, duckWidth, duckHeight);
            xPos = parameters[0];
            yPos = parameters[1];
            x = parameters[2];
            y = parameters[3];
            r = parameters[4];
        } else {
            xPos += x;
            yPos += y;
            duck.style.left = xPos + "px";
            duck.style.bottom = yPos + "px";
            duckAnimation(duck, xPos, yPos, x, y, r)
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
        randomAni = randomInt(0, 1),
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

    return [xPos, yPos, x, y, randomAni];
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
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", score);
    }
    let scoreBoard = document.getElementById("score"),
        PlifeBoard = document.getElementById("lifePoint"),
        hScoreBoard = document.getElementById("highScore"),
        newScoreBoard = "Score Points: "+ score,
        PnewLifeBoard = "Lives: "+ life,
        newHScoreBoard = "High Score: " + highScore;
    scoreBoard.innerHTML = newScoreBoard;
    PlifeBoard.innerHTML = PnewLifeBoard;
    hScoreBoard.innerHTML = newHScoreBoard;
}

function highScoreCheck() {
    let hScoreBoard = document.getElementById("highScore"),
    newHScoreBoard = "High Score: " + highScore;
    hScoreBoard.innerHTML = newHScoreBoard;
}

function main() {
    window.onload = function () {
        highScoreCheck();
        duck();
        dog();
    };
}


main();
