function grow(){
	var row = document.getElementById("row").value;
	var col = document.getElementById("column").value;
	var garden = document.getElementById("garden");
	if(garden.hasChildNodes()){
		garden.removeChild(garden.childNodes[0]);
	}
	var table = document.createElement('table');
	table.style.borderCollapse = "collapse";
	for(var i=0;i<row;i++){
		var tr = document.createElement("tr");
		for(var j=0;j<col;j++){
			var td = document.createElement('td');
			td.style.width = "50px";
			td.style.height = "50px";
			var img = document.createElement('img');
			if(Rand()==1){
				img.src = "img/rose.jpg";	
			}else{
				img.src = "img/daffodil.jpg";
			}			
			img.style.width = "100%";
			img.style.height = "100%";
			td.appendChild(img);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	garden.appendChild(table);
}
function Rand(){
	var rand = Math.random();
	if(rand<=0.5){
		return 1;
	} else if(rand<=1){
		return 2;
	}
}