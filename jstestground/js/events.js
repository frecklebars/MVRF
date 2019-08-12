var button = document.getElementById("eventb");
var textsp = document.getElementById("eventtxt");
var textblr = document.getElementById("eventblrtest");

button.addEventListener("click", clickchange);
button.addEventListener("mouseover", msoverchange);
button.addEventListener("keypress", keyprchange);

button.addEventListener("blur", blrchange);
button.addEventListener("focus", fcschange);

function clickchange(){
	textsp.innerHTML = "changed on click";
}

function msoverchange(){
	textsp.innerHTML = "changed on mouseover";
}

function keyprchange(){
	textsp.innerHTML = "changed on keypress";
}

function blrchange(){
	textblr.innerHTML = "blur:";
}

function fcschange(){
	textblr.innerHTML = "focus:";
}