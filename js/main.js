var displayMode = "block";

function displayMenu(id){
	if(id.startsWith("f")){
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

function setup(n){
	ccardsetup(n);
	clocksetup();
}

function clocksetup(){
	var clockdiv = "";
	clockdiv += '<span class="time">';
	clockdiv += '	<span id="h"></span> : ';
	clockdiv += '	<span id="m"></span> : ';
	clockdiv += '	<span id="s"></span> : ';
	clockdiv += '	<span id="mi"></span>';
	clockdiv += '</span>';
	clockdiv += '<span class="days">';
	clockdiv += '	<span id="mon"></span> ';
	clockdiv += '	<span id="dy"></span> ';
	clockdiv += '	<span id="y"></span>';
	clockdiv += '</span>';
	var clockelement = document.getElementById("clock");
	if(clockelement != null){
		clockelement.innerHTML = clockdiv;
	}

	startTime();
}

function ccardsetup(n){
	backPath = "";
	if(n){
		for(i = 0; i<n; i++){
			backPath += "../";
		}
	}
	var ccard = "";
	ccard += '<p>Alexandru Popa, 19</p>';
	ccard += '		<p>aka. "frecklebars", "vaudevian"</p>';
	ccard += '		<p>popaalex@gmail.com</p><br> ';
	ccard += '		<div class="icons"> ';
	ccard += '			<a href="https://github.com/frecklebars"><img class="icon" src="'+ backPath + 'style/icons/github.svg"></a> / ';
	ccard += '			<a href="https://frecklebars.itch.io/"><img class="icon" src="' + backPath + 'style/icons/itchio.svg"></a> / ';
	ccard += '			<a href="https://twitter.com/frecklebars"><img class="icon" src="'+ backPath + 'style/icons/twitter.svg"></a> / ';
	ccard += '			<a href="https://www.instagram.com/frecklebars/"><img class="icon" src="'+ backPath + 'style/icons/instagram.svg"></a> / ';
	ccard += '			<a href="https://www.instagram.com/vaudevian/"><img class="icon" src="'+ backPath + 'style/icons/instagram.svg"></a> / ';
	ccard += '			<a href="https://open.spotify.com/user/3cxkyoe0z7lja736z4zi0cmyl?si=ka2y4_CdSByctSKJauIzNg"><img class="icon" src="'+ backPath + 'style/icons/spotify.svg"></a> / ';
	ccard += '			<a href="https://www.facebook.com/alex.popa.376043"><img class="icon" src="'+ backPath + 'style/icons/facebook.svg"></a> / ';
	ccard += '			<a href="https://rateyourmusic.com/~frecklebars"><img class="icon" src="'+ backPath + 'style/icons/cd.svg"></a>';
	ccard += '		</div>';
	ccard += '		<br><br>';
	ccard += '		<p>copyright © 2019-2020, Alexandru Popa</p><br><hr><br>';
	document.getElementById("contactcard").innerHTML = ccard;
}

