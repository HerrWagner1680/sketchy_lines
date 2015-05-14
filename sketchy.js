
function updateLINE(maxRIGHT,maxWIDTH){
	// strictly for regular line SVG
	// document.getElementById("lin_1").setAttribute("x2", maxRIGHT);
	// document.getElementById("lin_2").setAttribute("x2", maxRIGHT);
	// document.getElementById("lin_3").setAttribute("x2", maxRIGHT);

	var polyPOINTS = document.getElementById("poly_1").getAttribute("points");

	// document.getElementById("lin_2").style.width = maxWIDTH + "px";
	// document.getElementById("lin_3").style.width = maxWIDTH + "px";
	addLINES();
};

function addLINES(){
	var lines_to_add = document.getElementById("num_lines").innerHTML - document.getElementsByClassName("lin").length;
	console.log("num of lines to add: " + lines_to_add);

	// var nnn = document.getElementsByTagName("polyline").length
	// var node = document.getElementById("poly_" + nnn);
	// // var elem = document.createElement("polyline");
	// var elem = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
	// node.parentNode.insertBefore(elem,node.nextSibling);
	// // add attributes to last polyline
	// // document.getElementsByTagName("polyline")[nnn]
	// document.getElementsByTagName("polyline")[nnn].setAttribute("id","poly_" + (nnn + 1))

	var old_yAve = parseFloat(document.getElementById("in_yave").value)
	var first_run = 20

	var xLEFT = 20
	var xRIGHT = 20 + parseInt(maxRIGHT);
	var yAve = parseInt(first_run) + parseInt(old_yAve);
	// var yAve = parseFloat(document.getElementById("in_yave").value)
	var minW = parseFloat(document.getElementById("in_minw").value)
	var maxW = parseFloat(document.getElementById("in_maxw").value)
	var everyxCHANGE = parseFloat(document.getElementById("in_x_node_spac").value)
	var maxSKEW = parseFloat(document.getElementById("in_x_skew").value)

	var numLINES = parseFloat(document.getElementById("in_num_lines").value)

	console.log(xLEFT, xRIGHT,yAve,minW,maxW,everyxCHANGE,maxSKEW,numLINES);

	for (z = 2; z < lines_to_add + 2; z++) {
			var yAve = z * parseInt(old_yAve);
			var nnn = document.getElementsByTagName("polyline").length
			var node = document.getElementById("poly_" + nnn);
			// var elem = document.createElement("polyline");
			var elem = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
			node.parentNode.insertBefore(elem,node.nextSibling);
			// add attributes to last polyline
			// document.getElementsByTagName("polyline")[nnn]
			document.getElementsByTagName("polyline")[nnn].setAttribute("id","poly_" + (nnn + 1))


		randLINE(xLEFT, xRIGHT, yAve, minW, maxW, everyxCHANGE, maxSKEW, numLINES);

		var yAve = parseInt(old_yAve);

		//console.log("COMPLETEXY" + completeXY)
		console.log(z);
	};
	console.log("loopy done");
};

function drawLINE(completeXY){
	var nnn = document.getElementsByTagName("polyline").length
	var node = document.getElementById("poly_" + nnn);
	node.setAttribute("points", completeXY);
	// node.setAttribute("points","10,10 10,230 15,234 15,10");
	node.setAttribute("style", "stroke:#222;");
};