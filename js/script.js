var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src", "img/dice"+ randomNumber1 + ".png");

document.querySelector(".img2").setAttribute("src", "img/dice"+ randomNumber2 + ".png");

function gameWinner() {
if (randomNumber1 > randomNumber2) {
    document.querySelector("H1").innerHTML = "  🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("H1").innerHTML = "Player 2 Wins!  🚩 ";
  } else {
    document.querySelector("H1").innerHTML ="  🚩 It's a Draw!  🚩 ";
  }
}

gameWinner();
