let score = 0,
    life = 11,
    highScore = 0;

highScore = localStorage.getItem("highScore");


function randomInt(start, end) {
    return Math.floor(Math.random() * (1 + end - start)) + start;
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
            dogAnimation(dog, xPos, right);
        } else {
            xPos -= 1;
            dog.style.left = xPos + "px";
            dogAnimation(dog, xPos, right);
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
                    switch (xPos % 100) {
                        case 0:
                            duckDiv.style.background = ["url(static/images/duckblueleft.png", "url(static/images/duckleft.png"][r];
                            duckDiv.style.height = "50px";
                            duckDiv.style.width = "80px";
                            break;
                        case 50:
                            duckDiv.style.background = ["url(static/images/duckblueleft2.png)", "url(static/images/duckleft2.png"][r];
                            duckDiv.style.height = "50px";
                            duckDiv.style.width = "80px";
                            break;
                    }
                    break;
                case 1:
                    switch (yPos % 100) {
                        case 0:
                            duckDiv.style.background = ["url(static/images/duckleftup.png)", "url(static/images/duckblueleftup.png"][r];
                            duckDiv.style.height = "76px";
                            duckDiv.style.width = "62px";
                            break;
                        case 50:
                            duckDiv.style.background = ["url(static/images/duckleftup2.png)", "url(static/images/duckblueleftup2.png"][r];
                            duckDiv.style.height = "76px";
                            duckDiv.style.width = "62px";
                            break;
                    }
                    break;
            }
            break;
        case 0:
            switch (y) {
                case 0:
                    break;
                case 1:
                    switch (yPos % 100) {
                        case 0:
                            duckDiv.style.background = ["url(static/images/duckleftup.png)", "url(static/images/duckrightup.png"][r];
                            duckDiv.style.height = "76px";
                            duckDiv.style.width = "62px";
                            break;
                        case 50:
                            duckDiv.style.background = ["url(static/images/duckleftup2.png)", "url(static/images/duckrightup2.png"][r];
                            duckDiv.style.height = "76px";
                            duckDiv.style.width = "62px";
                            break;
                    }
                    break;
            }
            break;
        case 1:
            switch (y) {
                case 0:
                    switch (xPos % 100) {
                        case 0:
                            duckDiv.style.background = ["url(static/images/duckblueright.png", "url(static/images/duckright.png"][r];
                            duckDiv.style.height = "50px";
                            duckDiv.style.width = "80px";
                            break;
                        case 50:
                            duckDiv.style.background = ["url(static/images/duckblueright2.png)", "url(static/images/duckright2.png"][r];
                            duckDiv.style.height = "50px";
                            duckDiv.style.width = "80px";
                            break;
                    }
                    break;
                case 1:
                    switch (yPos % 100) {
                        case 0:
                            duckDiv.style.background = ["url(static/images/duckrightup.png)", "url(static/images/duckbluerightup.png"][r];
                            duckDiv.style.height = "76px";
                            duckDiv.style.width = "62px";
                            break;
                        case 50:
                            duckDiv.style.background = ["url(static/images/duckrightup2.png)", "url(static/images/duckbluerightup2.png"][r];
                            duckDiv.style.height = "76px";
                            duckDiv.style.width = "62px";
                            break;
                    }
                    break;
            }
            break;
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
        duckWidth = duck.clientWidth;
        duckHeight = duck.clientHeight;
        maxWidth = document.getElementById("container").clientWidth;
        maxHeight = document.getElementById("container").clientHeight;
        if (xPos >= maxWidth - duckWidth || xPos <= 0 || yPos + duckHeight >= maxHeight) {
            lifePoint();
            if (life <= 0) {
                // let loseRound = new Audio("static/sounds/loseRound.wav");
                // loseRound.play();
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
        y = maxHeight;
        let blast = new Audio("static/sounds/blast.wav");
        blast.play();
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
            xPos = randomInt(20, maxWidth - duckWidth - 20);
            yPos = duckHeight;
            x = [-1, 0, 1][randomInt(0, 2)];
            y = 1;
            break;
        case 1:
            let r = randomInt(0, 1);
            xPos = [20, maxWidth - duckWidth - 20][r];
            yPos = randomInt(duckHeight, maxHeight - duckHeight * 2);
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
    let lifeBoard = document.getElementById("lifePoint");
    lifeBoard.innerHTML = "Lives: " + life;
}


function spawn() {
    let container = document.getElementById("container"),
        node = document.createElement("div");
    node.setAttribute("id", "duck" + score);
    container.appendChild(node);
    duckMovement(document.getElementById("duck" + score))
}


function scorePoint() {
    score += 1;
    life += 1;
    if (score % 5 === 0 && score !== 0 && score < 16) {
        spawn();
    } else if (score / 10 === 1) {
        duckMovement(document.getElementById("duck2"))
    }
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", score);
    }
    let scoreBoard = document.getElementById("score"),
        pLifeBoard = document.getElementById("lifePoint"),
        hScoreBoard = document.getElementById("highScore");
    scoreBoard.innerHTML = "Score Points: " + score;
    pLifeBoard.innerHTML = "Lives: " + life;
    hScoreBoard.innerHTML = "High Score: " + highScore;
}


function highScoreCheck() {
    let hScoreBoard = document.getElementById("highScore");
    hScoreBoard.innerHTML = "High Score: " + highScore;
}


function main() {
    window.onload = function () {
        highScoreCheck();
        duck();
        dog();
    };
}


main();
