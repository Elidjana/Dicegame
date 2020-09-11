

    document.getElementById("player1").innerHTML= localStorage.getItem("textvalue").toUpperCase();//zevendeso emrat e lojtareve
    document.getElementById("player2").innerHTML= localStorage.getItem("textvalue2").toUpperCase();

var displayPlayer1 = localStorage.getItem("textvalue");
var displayPlayer2= localStorage.getItem("textvalue2");

var winner1 = displayPlayer1[0].toUpperCase() + displayPlayer1.slice(1).toLowerCase();
var winner2 = displayPlayer2[0].toUpperCase() + displayPlayer2.slice(1).toLowerCase();


//hedhja e zareve

function Loja(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If per fituesin
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = winner1 +" fitoi!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = winner2 +" fitoi!";
}
else {
  document.querySelector("h1").innerHTML = "Luaj perseri!";
}

}
