var paddleHeight = 150;
var paddleWidth = 30;
var ballRadius = 25;
var halfPaddleHeight = paddleHeight/2;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var positionOfPaddle1 = 220;
var positionOfPaddle2 = 220;
var topPositionOfBall = 210;
var leftPositionOfBall = 820;
var topSpeedOfBall = 10;
var score1 = 0;
var score2 = 0;


// movment functiuons
//balls

function startBall() {
    topPositionOfBall = 510;
    leftPositionOfBall = 820;
// 
    if(Math.random() < 0.5) {
        var side = 1;
    } else {
        var side = -1;
    }

    leftSpeedOfBall = side * (Math.random() * 8 + 5)
    topSpeedOfBall = Math.random() * 8 + 5;


}

//w and s
document.addEventListener("keydown", function(e){
    if(e.keyCode == 87 || e.which == 87) {
        speedOfPaddle1 = -12;
    }
    if(e.keyCode == 83 || e.which == 83) {
        speedOfPaddle1 = 12;
    }
    //up and down 
    if (e.keyCode == 38 || e.which == 38) {
        speedOfPaddle2 = -12;
    }
    if (e.keyCode == 40 || e.which == 40) {
        speedOfPaddle2 = 12;
    }
})
// and the reverse
document.addEventListener("keyup", function(e){
    if(e.keyCode == 87 || e.which == 87) {
        speedOfPaddle1 = 0;
    }
    if(e.keyCode == 83 || e.which == 83) {
        speedOfPaddle1 = 0;
    }
     
    if (e.keyCode == 38 || e.which == 38) {
        speedOfPaddle2 = 0;
    }
    if (e.keyCode == 40 || e.which == 40) {
        speedOfPaddle2 = 0;
    }
})
// boundaries and paddle motion
window.setInterval(function show() {
    positionOfPaddle1 += speedOfPaddle1;
    positionOfPaddle2 += speedOfPaddle2;

    topPositionOfBall += topSpeedOfBall;
    leftPositionOfBall += leftSpeedOfBall;
//block top
    if(positionOfPaddle1 <= 1) {
        positionOfPaddle1 = 1;
    }

    if(positionOfPaddle2 <= 1) {
        positionOfPaddle2 = 1;
    }
// block bottom
    if (positionOfPaddle1 >= window.innerHeight - paddleHeight){
        positionOfPaddle1 = window.innerHeight - paddleHeight
    }

    if (positionOfPaddle2 >= window.innerHeight - paddleHeight){
        positionOfPaddle2 = window.innerHeight - paddleHeight
    }
    if (topPositionOfBall <= 10 || topPositionOfBall >= window.innerHeight - ballRadius){
        topSpeedOfBall = - topSpeedOfBall;
    }
////////////START HERE ADD PADDLE BOUNCE/////////////
    if (leftPositionOfBall <= paddleWidth) {
        if (topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1  + paddleHeight){
            leftSpeedOfBall = -leftSpeedOfBall;
        }else {
            score1++
            startBall();
        }
    }
    if (leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth) {
        if (topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight){
            leftSpeedOfBall = -leftSpeedOfBall;
        }else{
            score2++
            startBall();
        }
    }
    
    if (score1 >= 10) {
        alert("Player 2 has won!!!");
        reset();
    }else if (score2 >= 10){
        alert("Player 1 has won!!!");
        reset();
    }


    document.getElementById("paddle1").style.top = positionOfPaddle1 + "px";
    document.getElementById("paddle2").style.top = positionOfPaddle2 + "px";

    document.getElementById("ball").style.top = topPositionOfBall + "px";
    document.getElementById("ball").style.left = leftPositionOfBall + "px";

    document.getElementById("score1").innerHTML = score2.toString()
    document.getElementById("score2").innerHTML = score1.toString()


}, 1000/60)

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("body").addEventListener("click", function(){
        document.querySelector("#startMenu").classList.add("hideMe")
    })
})
