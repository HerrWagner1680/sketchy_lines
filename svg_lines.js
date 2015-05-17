function randLINE(xLEFT, xRIGHT, yAve, minW, maxW, everyxCHANGE, maxSKEW, numLINES, gaps){
	console.log(numLINES);
	console.log("gaps " + gaps)

	// for (i = 0; i < numLINES; i++) {
		var try1 = xArr(xLEFT, xRIGHT, everyxCHANGE, maxSKEW);
		var try2 = xArr(xLEFT, xRIGHT, everyxCHANGE, maxSKEW);
		allX = try1.concat(try2.reverse());
		var arrLENGT = try1.length

		yPOSnon(yAve, minW, maxW, arrLENGT, gaps);

		//reset yAve to proper setting after first run
		//var yAve = parseFloat(document.getElementById("in_yave").value)
		//console.log("allX is: " + allX + " allY is: " + allY);
		comboXY();

		console.log(i);
	// }
};


//everyxCHANGE is the average distance between points on the x axis

function xArr(xLEFT, xRIGHT, everyxCHANGE, maxSKEW){
	myArr = []
	var xSPOT = xLEFT
	while (xSPOT < xRIGHT ) {
		var add_or_subt = Math.random()
		var rand = Math.random() * (maxSKEW)
		var rounded_tenth = Math.floor(10*rand)/10
			if (add_or_subt < 0.5){ 
				myArr.push(xSPOT - rounded_tenth);
			} else {
				myArr.push(xSPOT + rounded_tenth);
			}
		var xSPOT = everyxCHANGE + xSPOT;	
	};

	var add_or_subt = Math.random()
	var rand = Math.random() * (maxSKEW)
	var rounded_tenth = Math.floor(10*rand)/10
		if (add_or_subt < 0.5){ 
			myArr.push(xRIGHT - rounded_tenth);
		} else {
			myArr.push(xRIGHT + rounded_tenth);
		}

	console.log("myArr length " + myArr.length)
	return myArr;
};


// myArr.reverse()
// var try1 = xArr(20,200,10,2)
// var try2 = xArr(20,200,10,2)
// allX = try1.concat(try2.reverse());
// var a_leng = try1.length     // number of y tops and y bottoms needed




// NON-SYMMETRIC -- bottom displacement diff random # from top displacement
// WORKS BETTER IF MIN IS AN EVEN NUMBER --- or use round instead of floor
// var bottomY = [];
// var topY = [];

function yPOSnon(yAve, minW, maxW, arrLENGT, gaps){
	var bottomY = [];
	var topY = [];

	var whiteoutPOS = [];
	var whiteoutPOS2 = [];

	var max = maxW/2
	var min = minW/2

	for (i = 0; i < arrLENGT; i++) {
		var rand_top = Math.random() * (max - min) + min
		var rounded_tenth_top = Math.floor(10*rand_top)/10
		var rand_bottom = Math.random() * (max - min) + min
		var rounded_tenth_bottom = Math.floor(10*rand_bottom)/10

		bottomY.push(yAve - rounded_tenth_bottom);
		topY.push(yAve + rounded_tenth_top);
	};

	var half_gaps = gaps/2

    // SEARCHING FOR THINNEST SPOTS TO DO WHITEOUT POLYGON
	for (i = 0; i < arrLENGT; i++) {
		if (bottomY[i] >= yAve - half_gaps && topY[i] <= yAve + half_gaps) {
			whiteoutPOS = whiteoutPOS.concat(i);
			whiteoutPOS2 = whiteoutPOS2.concat(bottomY[i] + " " + topY[i])
		}
	}

	allY = topY.concat(bottomY.reverse());

	console.log("whiteout array " + whiteoutPOS)
	console.log("POS2 " + whiteoutPOS2)

	potentialGAPS = []
	numPOLYGONS = 0

	for (i=0; i<= whiteoutPOS.length; i++) { 
		if(whiteoutPOS[i-1] == whiteoutPOS[i]-1){
			// console.log("check out spots " + (i-1) + " and " + i)
			potentialGAPS.push(whiteoutPOS[i-1])
			console.log("potentialGAPS variable ... REAL GAPS start #s  " + potentialGAPS)
			numPOLYGONS = numPOLYGONS + 1
		}
	}
	console.log("num of polygons in line " + numPOLYGONS)
	// console.log("length of allY " + allY.length)
	// console.log(" zero pos of allY " + allY[0])
	// console.log(" one pos of allY " + allY[1])
	// console.log(" end pos of allY " + allY.slice(-1)[0])
	// console.log(" second last pos of allY " + allY.slice(-2)[0])

	//NOTE - last half is TOP coordinates
	//final point can be ignored to give line a tapering effect
	// see comboXY function

	//return allY
};

function comboXY(){
	completeXY = [];
	for (i = 0; i < allX.length; i++) {
//NOTE - if you want a gradual edge on line , do i < allX.length - 1

//		completeXY.concat(allX[i] + allY[i])
		completeXY += JSON.stringify(allX[i]) + "," + JSON.stringify(allY[i]) +  " ";
	}
	console.log(completeXY);
	// whiteout = []
	polyGAPS = 0  // polygon array for gaps
	if (typeof potentialGAPS !== "object" && potentialGAPS.length === "undefined" ){
			drawLINE(completeXY, polyGAPS);
		} else {		
			console.log("potentialgaps " + potentialGAPS)
			console.log(typeof potentialGAPS[0]);
						console.log(typeof potentialGAPS);
			// ggg = potentialGAPS[0].split(" ");

			polyGAPS = []
		for (i=0; i<= parseInt(numPOLYGONS) - 1; i++){
			ggg = parseInt(potentialGAPS[i])
			console.log("ggg " + ggg)
			qqq = completeXY.split(" ");
		
			polyGAPS.push(qqq[ggg] + " " + qqq[ggg+1] + " " + qqq.slice(-ggg-2)[0] + " " + qqq.slice(-ggg-3)[0] + " ")
		}

		console.log("polyGAPS " + polyGAPS);
		console.log("pg length " + polyGAPS.length)
		drawLINE(completeXY, polyGAPS);
	}
};

// REM to keep shifting your imput numbers of else random line will be in same area each time


// myArr += " " + JSON.stringify(allX[7]) + "," + JSON.stringify(allY[7]);

// nnn += " " + JSON.stringify(allX[3]) + "," + JSON.stringify(allY[3]);

// mmm = nnn.split(" ");

// Adding a path using an array of x,y coordinate pairs:

// polyline.addPath([[-122.68,45.53], [-122.58,45.55],  [-122.57,45.58],[-122.53,45.60]]);

// myArr.push([allX[2],allY[2]])
// myArr.push(allX[3],allY[3])

//http://stackoverflow.com/questions/25706565/how-do-i-add-coordinates-to-an-svg-polyline

//mmm += JSON.stringify(allX[5]) + "," + JSON.stringify(allY[5]) + " ";
//pol = "<polyline points="
//sty = 'style="stroke:#222;"/>'
// pol + '"' + mmm + '"' + sty