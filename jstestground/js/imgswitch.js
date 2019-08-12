var mons = [
	"1.png",
	"2.png",
	"3.png"
];

var current = 0;
var mon = document.getElementById("mon");

function prev(){
	if(current == 0){
		current = 2;
	}
	else{
		current--;
	}
	mon.src = "testimg/" + mons[current];
}

function next(){
	if(current == 2){
		current = 0;
	}
	else{
		current++;
	}
	mon.src = "testimg/" + mons[current];
}