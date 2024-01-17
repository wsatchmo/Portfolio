var winCount = 0;
var lossCount = 0;
var whiteCount = 0;
var multiCount = 0;
var blueRandom;
var redRandom;
var yellowRandom;
var multiRandom;
var blackRandom;
var whiteRandom;
var scoreNum;
var goalNum;
var sound = document.getElementById("audio");

function clearScore(){
    //reset wins and losses and display
    winCount = 0;
    lossCount = 0;
    $(".wins").text(winCount);
    $(".losses").text(lossCount);
    $(".gamestat").text("-----");
    newGame();
}
$(".startgame").click(clearScore);

    //bluecrystal begin
$(".bluecrystal").click(function(){
    //add to scorenum and display; check score against goal
    sound.currentTime = 0;
    sound.play();
    scoreNum += blueRandom;
    $(".scorenum").text(scoreNum);
    scoreCheck();
    //so it doesn't display NaN in score number
    if (isNaN(scoreNum)){
        $(".scorenum").text("Press Start");
    }
}); //bluecrystal end
//repeat for other crystals
$(".redcrystal").click(function(){
    sound.currentTime = 0;
    sound.play();
    scoreNum += redRandom;
    $(".scorenum").text(scoreNum);
    scoreCheck();
    if (isNaN(scoreNum)){
        $(".scorenum").text("Press Start");
    }
});
$(".yellowcrystal").click(function(){
    sound.currentTime = 0;
    sound.play();
    scoreNum += yellowRandom;
    $(".scorenum").text(scoreNum);
    scoreCheck();
    if (isNaN(scoreNum)){
        $(".scorenum").text("Press Start");
    }
});
$(".multicrystal").click(function(){
    sound.currentTime = 0;
    sound.play();
    if (multiCount < 3){
        scoreNum += multiRandom;
        $(".scorenum").text(scoreNum);
        multiCount++;
        scoreCheck();
        if (multiCount === 3 || multiCount > 3){
            $(".multicrystal").text("Multi Crystal: ?");
        }
        if (isNaN(scoreNum)){
            $(".scorenum").text("Press Start");
        }
    } else {
        multiRandom = Math.floor(Math.random() * 8) + 10;
        scoreNum += multiRandom;
        $(".scorenum").text(scoreNum);
        $(".multicrystal").text("Multi Crystal: ?");
        scoreCheck();
        if (isNaN(scoreNum)){
            $(".scorenum").text("Press Start");
        }
    }
});
$(".blackcrystal").click(function(){
    sound.currentTime = 0;
    sound.play();
    var randomNum = Math.floor(Math.random() * 7);
    blackRandom = Math.floor(Math.random() * 44) + 1;
    if (randomNum !== 5){
        scoreNum += blackRandom;
        $(".scorenum").text(scoreNum);
    } else {
        scoreNum -= blackRandom;
        $(".scorenum").text(scoreNum);
    }
    scoreCheck();
    if (isNaN(scoreNum)){
        $(".scorenum").text("Press Start");
    }
});
$(".whitecrystal").click(function(){
    if (whiteCount < 3){
        sound.currentTime = 0;
        sound.play();
        scoreNum -= whiteRandom;
        $(".scorenum").text(scoreNum);
        whiteCount++;
        scoreCheck();
        if (whiteCount === 3){
            $(".whitecrystal").text("Out of Uses");
        }
        if (isNaN(scoreNum)){
            $(".scorenum").text("Press Start");
        }
    } else {
        $(".whitecrystal").text("Out of Uses");
    }
});

function newGame(){
    //set goal number and update it
    goalNum = Math.floor(Math.random() * 100) + 50;
    $(".goalnum").text(goalNum);
    //set score number and update it
    whiteCount = 0;
    multiCount = 0;
    scoreNum = 0;
    $(".scorenum").text(scoreNum);
    //set crystal worths
    blueRandom = Math.floor(Math.random() * 3) + 3;
    redRandom = Math.floor(Math.random() * 7) + 5;
    yellowRandom = Math.floor(Math.random() * 7) + 7;
    multiRandom = Math.floor(Math.random() * 8) + 10;
    whiteRandom = Math.floor(Math.random() * 5) + 7;
    //display on button
    $(".bluecrystal").text("Blue Crystal: " + blueRandom);
    $(".redcrystal").text("Red Crystal: " + redRandom);
    $(".yellowcrystal").text("Yellow Crystal: " + yellowRandom);
    $(".multicrystal").text("Multi Crystal: " + multiRandom);
    $(".whitecrystal").text("White Crystal: -" + whiteRandom);
}

function scoreCheck(){
    if (scoreNum === goalNum){
        //tell them they won
        $(".gamestat").text("Round Won!");
        //increase wins and display
        winCount++;
        $(".wins").text(winCount);
        //reset scoreNum
        scoreNum = 0;
        $(".scorenum").text(scoreNum);
        //start a new game
        newGame();
    } else if (scoreNum > goalNum){
        //tell them they lost
        $(".gamestat").text("Try Again!");
        //increase losses and display
        lossCount++;
        $(".losses").text(lossCount);
        //reset scoreNum
        scoreNum = 0;
        $(".scorenum").text(scoreNum);
        //start a new game
        newGame();
    }
}