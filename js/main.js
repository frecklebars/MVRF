var displayMode = "block";

function displayMenu(id){
	if(id.startsWith("i")){
		displayMode = "flex";
	}
	id = "menu" + id;
	var elemDisplayState =  document.getElementById(id).style.display;
	if(elemDisplayState == "" || elemDisplayState == "none"){
		document.getElementById(id).style.display = displayMode;
	}
	else{
		document.getElementById(id).style.display = "none";
	}
}

