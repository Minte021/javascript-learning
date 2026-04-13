function addToScreen(value) {
    let scrn = document.getElementById("screen");
    scrn.value += value;
}

function calculate() {
    let scrn = document.getElementById("screen");
    scrn.value = eval(scrn.value);
}

function deleteLast() {
    let scrn = document.getElementById("screen");
    scrn.value = scrn.value.slice(0, -1);
}

function clearScreen() {
    let scrn = document.getElementById("screen");
    scrn.value = "";
}