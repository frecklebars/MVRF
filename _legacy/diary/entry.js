var phase = 0;
function phase1(){
	if(phase == 0){
		document.getElementById("ph1").style.transform = "rotateX(180deg)";
		document.getElementById("ph12").style.transform = "rotateX(180deg)";
		document.getElementById("ph13").style.transform = "rotateX(180deg)";
		document.getElementById("ph2").style.display = "inline-block";
		phase = 1;
	}
	else{
		reset();
	}
}

function phase2(){
	if(phase == 1){
		document.getElementById("ph3").style.display = "inline-block";
		for(var i=0; i<5; i++){
			var id = "tst" + i;
			document.getElementById(id).href = "aaa.html";
		}
		phase = 2;
	}
	else{
		reset();
	}
}

oldhref = [
	"../index.html", 
	"../projects/index.html", 
	"../collection/index.html", 
	"../stuff/index.html", 
	"../cheese/index.html"
	]

function reset(){
	document.getElementById("ph1").style.transform = "rotateX(0deg)";
	document.getElementById("ph12").style.transform = "rotateX(0deg)";
	document.getElementById("ph13").style.transform = "rotateX(5deg)";
	document.getElementById("ph2").style.display = "none";

	document.getElementById("s1").style.color = "#eeeeee";
	document.getElementById("s2").style.color = "#eeeeee";

	for(var i=0; i<5; i++){
		var id = "tst" + i;
		document.getElementById(id).href = oldhref[i];
	}
	phase = -1;
}