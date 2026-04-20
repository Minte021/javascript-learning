function calculateLove() {
    let percent = Math.random();
    percent *= 100;
    percent = Math.floor(percent);
    percent += 1;

    document.getElementById("result").innerHTML = percent;
}