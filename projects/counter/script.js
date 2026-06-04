let counter = 0;

function updateCounter() {
  document.getElementById("count").innerHTML = counter;
}

function countUp() {
  counter++;
  updateCounter();
}

function countDown() {
  if (counter == 0) {
    counter = 0;
  } else {
    counter--;
  }
  updateCounter();
}

function reset() {
  counter = 0;
  updateCounter();
}
