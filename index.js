var randomNumber1 = Math.floor(Math.random() * 6) + 1;   //1-6

var randomDiceImage = "./images/dice" + randomNumber1 + ".png";   //./images/dice1.png - ./images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);   //change image


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🎉";
} 
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 wins!";
} 
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Congrats you both won! 🎉";
}







