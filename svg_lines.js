function randLINE(xLEFT, xRIGHT, yAve, minW, maxW, everyxCHANGE, maxSKEW, numLINES){
	console.log(numLINES);

	// for (i = 0; i < numLINES; i++) {
		var try1 = xArr(xLEFT, xRIGHT, everyxCHANGE, maxSKEW);
		var try2 = xArr(xLEFT, xRIGHT, everyxCHANGE, maxSKEW);
		allX = try1.concat(try2.reverse());
		var arrLENGT = try1.length

		yPOSnon(yAve, minW, maxW, arrLENGT);

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

function yPOSnon(yAve, minW, maxW, arrLENGT){
	var bottomY = [];
	var topY = [];

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

	allY = topY.concat(bottomY.reverse());
	//return allY
};

function comboXY(){
	completeXY = [];
	for (i = 0; i < allX.length - 1; i++) {
//		completeXY.concat(allX[i] + allY[i])
		completeXY += JSON.stringify(allX[i]) + "," + JSON.stringify(allY[i]) +  " ";
	}
	console.log(completeXY);
	// var pol = "<polyline points="
	// var sty = 'style="stroke:#222;"/>'
	// fullpoly = pol + '"' + completeXY + '"' + sty
	// console.log("full poly: " + fullpoly);

	drawLINE(completeXY);
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