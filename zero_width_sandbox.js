
rrr = [2,5,3,8,1,5,8,3,5,5,3,6,9,1]

for (i=0; i<= rrr.length; i++) { 

	if(rrr[i-1] == rrr[i]){
		console.log("check out spots " + (i-1) + " and " + i)
	}

}

rrr = [0.2,5,3,8,0.1,5,8,0.3,0.5,5,3,6,9,1]

for (i=0; i<= rrr.length; i++) { 

	if(rrr[i-1] <= 0.5 && rrr[i] <= 0.5){
		console.log("check out spots " + (i-1) + " and " + i)
	}

}

//checking the end of the array - backwards in JS
rrr.slice(-1)[0]
1

rrr
[0.2, 5, 3, 8, 0.1, 5, 8, 0.3, 0.5, 0.5, 0.3, 6, 9, 1]
rrr.slice(-2)[0]
9

rrr.slice(-2)
[9, 1]

aaa = new Object
Object {}

aaa.y1 = rrr[8]
0.5
aaa.y2 = rrr[9]
0.5
aaa.y3 = rrr[10]
0.3

aaa
Object {y1: 0.5, y2: 0.5, y3: 0.3}


aaa.arr
[]
aaa.arr.push(8)
1
aaa.arr.push(9)
2
aaa.arr.push(11)
3
aaa.arr.push(15)
4
aaa.arr.push(16)
5

aaa
Object {y1: 0.5, y2: 0.5, y3: 0.3, arr: Array[5]}
aaa.arr
[8, 9, 11, 15, 16]


aaa.arr
[8, 9, 11, 15, 16]

for (i=0; i<= aaa.arr.length; i++) { 

	if(aaa.arr[i-1] == aaa.arr[i]-1){
		console.log("check out spots " + (i-1) + " and " + i)
	}

}
>> check out spots 0 and 1
>> check out spots 3 and 4


rrr = [4,5,6,7,8,9]
rrr.length
6

rrr.slice(-6)[0]
4

rrr[6]
undefined
rrr[5]
9

if whiteoutPOS shows 41, 42
myArr = qqq[41] + " " + qqq[42] + " " + qqq.slice(-42)[0] + " " + qqq.slice(-43)[0]

  <polygon points="200,10 500,10 500,210 200,210" style="fill:lime;stroke:white;stroke-width:1" />
********
  <polygon points="429.1,340.6 440,340.3 429.6,339.6 440.2,339.8" style="fill:white;stroke:white;stroke-width:2"></polygon>

rrr
[1, 2, 3, 4, 5, 6, 7]
rrr.splice(-1)[0]
7
rrr
[1, 2, 3, 4, 5, 6]

//work your way backwards on that
