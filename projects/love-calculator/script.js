function calculateLove() {
  let percent = Math.random();
  percent *= 100;
  percent = Math.floor(percent);
  percent += 1;

  let name1 = document.getElementById("name1").value;
  let name2 = document.getElementById("name2").value;
  if (name1 === name2 && name1 !== "" && name2 !== "") {
    percent = 100;
  } else if (name1 === "" || name2 === "") {
    percent = 0;
  }
  document.getElementById("result").innerHTML = percent;
  document.getElementById("name1").value = "";
  document.getElementById("name2").value = "";
}
