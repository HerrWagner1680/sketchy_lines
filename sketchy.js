
function updateLINE(maxRIGHT,maxWIDTH){
	// strictly for regular line SVG
	document.getElementById("lin_1").setAttribute("x2", maxRIGHT);
	document.getElementById("lin_2").setAttribute("x2", maxRIGHT);
	document.getElementById("lin_3").setAttribute("x2", maxRIGHT);

	var polyPOINTS = document.getElementById("poly_1").getAttribute("points");

	// document.getElementById("lin_2").style.width = maxWIDTH + "px";
	// document.getElementById("lin_3").style.width = maxWIDTH + "px";
	addLINES();
};

function addLINES(){
	var lines_to_add = document.getElementById("num_lines").innerHTML - document.getElementsByClassName("lin").length;
	console.log("num of lines to add: " + lines_to_add);

	var nnn = document.getElementsByTagName("polyline").length
	var node = document.getElementById("poly_" + nnn);
	var elem = document.createElement("polyline");
	node.parentNode.insertBefore(elem,node.nextSibling);
	// add attributes to last polyline
	document.getElementsByTagName("polyline")[nnn]
	document.getElementsByTagName("polyline")[nnn].setAttribute("id","poly_" + (nnn + 1))
};