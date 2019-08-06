var time = new Date();
var bday = new Date(977011200000);

var person = {
	firstName: "Alexandru",
	lastName: "Popa",
	age: function(){
		var year = time.getFullYear();
		var byear = bday.getFullYear();
		if(time.getMonth() < bday.getMonth()){
			year--;
		}
		else if(time.getMonth() == bday.getMonth()){
			if(time.getDay() < bday.getDay()){
				year--;
			}
		}
		return year - byear;
	},
	clicks: 0
};

function displayO(){
	document.getElementById("objd").innerHTML = "";
	person.clicks++;
	for(var i in person){
		if(typeof person[i] == "function"){
			var strfc = "<li>" + i + ": " + person[i]() + "</li>";
			document.getElementById("objd").innerHTML += strfc;
			continue;
		}
		var strli = "<li>" + i + ": " + person[i] + "</li>";
		document.getElementById("objd").innerHTML += strli;
	}
}