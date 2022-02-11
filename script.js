var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var randomColor = Math.floor(Math.random()*16777215).toString(16);

function setBackground() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function getLucky() {
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);

	body.style.background = "linear-gradient(to right, #" + randomColor1 + ", #" + randomColor2 + ")";
	color1.value = "#" + randomColor1;
	color2.value = "#" + randomColor2;

	css.textContent = body.style.background + ";";
}

setBackground();

color1.addEventListener("input", setBackground);

color2.addEventListener("input", setBackground);

button.addEventListener("click", getLucky);