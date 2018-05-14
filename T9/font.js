var smaller = document.getElementById("smaller");
var bigger = document.getElementById("bigger");
var p = document.getElementsByTagName("p");

function stylize(fontSize) {
	for(var i=0;i<p.length;i++){
		p[i].style.fontSize = fontSize + 'pt';
	}
}

smaller.onclick = function(){
	var fontSize = parseInt(p[0].style.fontSize);
	fontSize-=2;
	stylize(fontSize);	
}

bigger.onclick = function(){
	var fontSize = parseInt(p[0].style.fontSize);
	fontSize+=2;
	stylize(fontSize);
}

window.onload = stylize(12);