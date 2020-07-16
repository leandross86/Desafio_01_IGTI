let redColor = 0;
let greenColor = 0;
let blueColor = 0;

let colorShow = document.getElementById("shows");

function onLoad() {
  document.getElementById("show-Red").innerHTML = 1;
  document.getElementById("showGreen").innerHTML = 1;
  document.getElementById("showBlue").innerHTML = 1;
  colorShow.style.background = "#000";
}

document.getElementById("red").addEventListener("input", (event) => {
  const { value } = event.target;
  redColor = value;
  document.getElementById("show-Red").innerHTML = value;
});

document.getElementById("green").addEventListener("input", (event) => {
  const { value } = event.target;
  greenColor = value;
  document.getElementById("showGreen").innerHTML = value;
});

document.getElementById("blue").addEventListener("input", (event) => {
  const { value } = event.target;
  blueColor = value;
  document.getElementById("showBlue").innerHTML = value;
});

document.getElementById("sliders").addEventListener("input", () => {
  colorShow.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
});