function startBox(){
	var t = setInterval(move, 10);
	var box = document.getElementById("box");
	var container = document.getElementById("container");
	var boxcss = window.getComputedStyle(box);
	var containercss = window.getComputedStyle(container);
	var boxwidth = Number(boxcss.width.slice(0, -2));
	var containerwidth = Number(containercss.width.slice(0, -2));

	var pos = 0;
	function move(){
		if(pos >= containerwidth - boxwidth){
			clearInterval(t);
			return;
		}
		pos += 1;

		box.style.left = pos + "px";
		box.style.top = pos + "px";
	}
}