
var player4= prompt("please Enter the player1 Name");
var player3 = prompt("please Enter the player2 Name");

document.querySelectorAll("p")[0].innerHTML = player4;
document.querySelectorAll("p")[1].innerHTML = player3;



var a = Math.floor(Math.random() *6) + 1;
var s= "images/dice" + a + ".png" ;
document.querySelectorAll("img") [0].setAttribute("src", s);




var b = Math.floor (Math.random() *6) +1;
var d = "images/dice" + b + ".png";
document.querySelectorAll("img") [1].setAttribute ("src" , d);




if (a > b) {
    document.querySelector("h1") .innerHTML = "congratulations " + player4 +" Won !";
}
else if (a<b) {
    document.querySelector("h1").innerHTML = "congratulations "  + player3 + " WON !";
}
else {
    document.querySelector("h1") .innerHTML = "Match draw";

}




