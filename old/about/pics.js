
var descriptions = [
	"This was me after East European Comic Con when we went for pizza in full cosplay",
	"Here I like how my hair looked and also showed off the case I made",
	"This was before said con when I asked the group if they were ready"
];

var current = 0;
var max = 2;

function nextpic(){
	var sld = document.getElementById("me");
	var desc = document.getElementById("desc");
	if(current == max){
		current = 0;
	}
	else{
		current++;
	}
	sld.src = "pics/" + current + ".jpg";
	desc.innerHTML = descriptions[current];
}

function prevpic(){
	var sld = document.getElementById("me");
	var desc = document.getElementById("desc");
	if(current == 0){
		current = max;
	}
	else{
		current--;
	}
	sld.src = "pics/" + current + ".jpg";
	desc.innerHTML = descriptions[current];
}