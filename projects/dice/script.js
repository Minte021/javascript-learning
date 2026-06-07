const num1 = Math.floor(Math.random() * 6 + 1);
const num2 = Math.floor(Math.random() * 6 + 1);

function play() {
  const p1 = document.getElementById("diceImg1");
  const p2 = document.getElementById("diceImg2");

  p1.src = `/projects/dice/images/dice${num1}.png`;
  p2.src = `/projects/dice/images/dice${num2}.png`;
}

play();

const result = document.getElementById("result");

if (num1 > num2) {
  result.textContent = "Player 1 Wins!";
} else if (num2 > num1) {
  result.textContent = "Player 2 Wins!";
} else {
  result.textContent = "Draw!";
}
