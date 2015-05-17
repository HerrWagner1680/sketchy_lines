
function updateLINE(maxRIGHT,maxWIDTH){
	var polyPOINTS = document.getElementById("poly_1").getAttribute("points");

	// document.getElementById("lin_2").style.width = maxWIDTH + "px";
	// document.getElementById("lin_3").style.width = maxWIDTH + "px";
	addLINES();
};

function addLINES(){
	var lines_to_add = document.getElementById("num_lines").innerHTML - document.getElementsByClassName("lin").length + 1;
	console.log("num of lines to add: " + lines_to_add);

	var poly_length = document.getElementsByTagName("polyline").length

	if (poly_length >= 2 | poly_length == undefined){ 

		var node = document.getElementById("poly_2");
			// var elem = document.createElement("polyline");
		var elem = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
		node.parentNode.insertBefore(elem,node.nextSibling);
		
		for (q = 0; q < poly_length; q++) {
			document.getElementsByTagName("polyline")[1].remove();
		};
	};

	var gaps_num = document.getElementsByTagName("polygon").length

	if (gaps_num >=2 | gaps_num == undefined){
		var node = document.getElementById("gap_2");
			// var elem = document.createElement("polyline");
		var elem = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
		node.parentNode.insertBefore(elem,node.nextSibling);
		
		for (q = 0; q < gaps_num; q++) {
			document.getElementsByTagName("polygon")[1].remove();
		};
	}

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

	var gaps = parseFloat(document.getElementById("in_gaps").value)

	console.log(xLEFT, xRIGHT,yAve,minW,maxW,everyxCHANGE,maxSKEW,numLINES,gaps);

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


		randLINE(xLEFT, xRIGHT, yAve, minW, maxW, everyxCHANGE, maxSKEW, numLINES, gaps);

		var yAve = parseInt(old_yAve);

		//CREATE THE POLYGON GAPS, IF ANY

		console.log("number of polygons in this here liney " + numPOLYGONS)

		whiteOUT(polyGAPS, numPOLYGONS)
		//console.log("COMPLETEXY" + completeXY)
		console.log(z);
	};
	console.log("loopy done");
};

function drawLINE(completeXY, polyGAPS){
	var nnn = document.getElementsByTagName("polyline").length
	var node = document.getElementById("poly_" + nnn);
	node.setAttribute("points", completeXY);
	// node.setAttribute("points","10,10 10,230 15,234 15,10");
	node.setAttribute("style", "stroke:#222;");
};

function whiteOUT(polyGAPS, numPOLYGONS){
	if (polyGAPS == 0) { 
		return 
	} else {
		for(i=0; i<=numPOLYGONS; i++){
			var nnn = document.getElementsByTagName("polygon").length
			var node = document.getElementById("gap_" + nnn);
			var elem = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
			node.parentNode.insertBefore(elem,node.nextSibling);

			document.getElementsByTagName("polygon")[nnn].setAttribute("id","gap_" + (nnn + 1))

			// pg_length = polyGAPS.length
			var pg = polyGAPS.slice(-1)[0]

			node.setAttribute("points", pg);
			node.setAttribute("class", "whiteout");
			polyGAPS.splice(-1)[0]
		}
	}
};