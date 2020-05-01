$("button").click(function() {
    getValues();
    setTimeout(function(){
        document.querySelector("h3").innerHTML = ""; 
    }, 1200);
});

function getValues() {                  // change dice values/images 
    randomDice1 = Math.floor(Math.random()*6 + 1);
    randomDice2 = Math.floor(Math.random()*6 + 1);
    var randomImgSrc1 = "./images/dice" + randomDice1 + ".png";
    var randomImgSrc2 = "./images/dice" + randomDice2 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);
    document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);
    whoWon(randomDice1, randomDice2);
} 

function whoWon(Dice1, Dice2){                       // show who won
    if (Dice1 > Dice2)
        document.querySelector("h3").innerHTML = "Player 1 wins";
    else if (Dice1 == Dice2)
        document.querySelector("h3").innerHTML = "Draw Match";
    else if (Dice1 < Dice2)
        document.querySelector("h3").innerHTML = "Player 2 wins";
}