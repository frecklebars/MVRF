
var prompt2018 = [
					"", "Scar Tissue", "Plant Life", "Vivisection", 
					"Stabbed", "Bile", "Angelic", "Possessed","Sacrifice",
					"Apocalypse", "Bruises", "Eyes", "Spliced Together",
					"Battle Wounds", "Impalement", "Godhood", "Arrows",
					"Extra Limbs", "Horns", "Burned", "Demonic",
					"Experiment", "Bandages", "Decapitation", "Zombie",
					"Draconic", "Cyborg", "Turned To Stone", "Wings",
					"Nosebleed", "Hanahaki Disease", ""
				];
var prompt2019 = [
					"", "Fire", "Calm", "Tea", "Cookies", "Pumpkin",
					"Powernap", "Cherry Pie", "Chicken", "Ghost", 
					"Warm Socks", "Cozy", "Icecream", "Magical Bunny", 
					"Blanket", "Potion", "Rain", "Cake", "Falling",
					"Giant Scarf", "Spooky Sloth", "Wind", "Quiet",
					"Plant", "Haunted House", "Backpack", "Shooting Stars",
					"Cloud Atlas", "Harvest", "Bored", "Hot Chocolate",
					"Night"
				];

var displayYear = 0;
var on = 0;
var promptused;

function switchpr(year){
	displayYear = year;
	on = 1;
	if(year == 2018){
		promptused = prompt2018;
	}
	if(year == 2019){
		promptused = prompt2019;
	}
	for(let i = 1; i<=promptused.length - 1; i++){
		document.getElementById(i).innerHTML = promptused[i];
	}
}

var currentImg = 0;

function display(id){
	currentImg = id;
	if(id > 0 && id <10){
		id = "0" + id;
	}
	if(on){
		document.getElementById("drawing").src = displayYear + "/" + id + ".jpg";
	}
	
}

function button(lr){
	if(on == 1){
		var maxlim = 0;
		if(promptused[31]==""){
			maxlim = 1;
		}
		if(lr == 1){
			if(currentImg > 1){
				display(currentImg-1);
			}
		}
		if(lr == 2){
			if(currentImg < 31 - maxlim){
				display(currentImg-0+1);
			}
		}
	}
}