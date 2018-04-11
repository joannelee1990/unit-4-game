$(document).ready(function() {

var totalScore = 0;
var wins = 0;
var losses = 0;
var french = 0;
var hash = 0;
var mashed = 0;
var spirals = 0;
var min = 19;
var max = 120;
var randomComputer;

function generateRandomNumber () {
    randomComputer = Math.floor((Math.random() * (max - min + 1)) + min);
    $("#random-number").text("Random Number: " + randomComputer);
}
  
generateRandomNumber();

function generateFrench () {
    var min = 1;
    var max = 12;
    french = Math.floor((Math.random() * (max - min + 1)) + min);
}

function generateHash () {
    var min = 1;
    var max = 12;
    hash = Math.floor((Math.random() * (max - min + 1)) + min);
}

function generateMashed () {
    var min = 1;
    var max = 12;
    mashed = Math.floor((Math.random() * (max - min + 1)) + min);
}

function generateSpirals () {
    var min = 1;
    var max = 12;
    spirals = Math.floor((Math.random() * (max - min + 1)) + min);
}

generateFrench();
generateHash();
generateMashed();
generateSpirals();


function winGame () {
    if (totalScore === randomComputer ){
    wins++;
    $("#wins").text("Wins: " + wins);
    resetTotalScore();
    }
}

function loseGame () {
    if (totalScore > randomComputer){
    losses++;
    $("#losses").text("Losses: " + losses);
    resetTotalScore();
    }
}

function resetTotalScore () {
    totalScore = 0;
    french = 0;
    hash = 0;
    mashed = 0;
    spirals = 0;
    randomComputer=0;  
    $("#total-score").text("Your Total Score is: " + totalScore); 
    generateRandomNumber();
    generateFrench();
    generateHash();
    generateMashed();
    generateSpirals();   
}

$("#french").click(function() {
    totalScore += french;
    $("#total-score").text("Your Total Score is: " + totalScore);
    winGame();
    loseGame();
});

$("#hash").click(function() {
    totalScore += hash;
    $("#total-score").text("Your Total Score is: " + totalScore);
    winGame();
    loseGame();
});

$("#mashed").click(function() {
    totalScore += mashed;
    $("#total-score").text("Your Total Score is: " + totalScore);
    winGame();
    loseGame();
});

$("#spirals").click(function() {
    totalScore += spirals;
    $("#total-score").text("Your Total Score is: " + totalScore);
    winGame();
    loseGame();
});

});