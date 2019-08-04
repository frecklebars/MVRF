var person = {
	firstName: "Alexandru",
	lastName: "Popa",
	age: 18,
	fullName: function(){
		return this.firstName + " " + this.lastName;
	},
	clicks: 0
};

function displayO(){
	document.getElementById("objd").innerHTML = "";
	person.clicks++;
	for(var i in person){
		if(typeof person[i] == "function"){
			continue;
		}
		var strli = "<li>" + i + ": " + person[i] + "</li>";
		document.getElementById("objd").innerHTML += strli;
	}
}