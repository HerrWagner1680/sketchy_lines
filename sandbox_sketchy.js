// SANDBOX JS FILE

// append <polyline points=""style="stroke:#222;"/>


//to insert after in JS   http://xahlee.info/js/js_insert_after.html
// http://www.experts-exchange.com/Web_Development/Web_Languages-Standards/Q_23039483.html

// node = document.getElementById("poly_1");
// elem=document.createElement('polyline');
// node.parentNode.insertBefore(elem,node.nextSibling);

// add attributes to last polyline
// nnn = document.getElementsByTagName("polyline").length
// document.getElementsByTagName("polyline")[nnn-1]
// document.getElementsByTagName("polyline")[nnn-1].setAttribute("id","poly_" + "2")


function addLINES(){
	var lines_to_add = document.getElementById("num_lines").innerHTML - document.getElementsByClassName("lin").length;
	console.log("num of lines to add: " + lines_to_add);
};


//SUGGESTION - create a maximum number of rows that user may not exceed
$('#row_add').click(function() {

    var last_row = parseInt($('#real-data tr:last-of-type').attr('id').split('_')[1]);
    var last_col = $('#real-data tr:last-of-type > td:last-of-type > input').attr('id').split('_')[2];
    var last_col_int = last_col.charCodeAt(0);
    var next_col_int = last_col_int + 1;
    var next_col = String.fromCharCode(next_col_int);
    var next_row = last_row + 1;

    console.log("next row:" + next_row);

    //create empty new table row
    $("#real-data").append("<tr id='row_" + next_row + "'></td>");

    var col_a_int = 97;

    while(col_a_int <= last_col_int){
        var col_letter = String.fromCharCode(col_a_int);
        console.log("col letter " + col_letter);
        console.log("next_row " + next_row);
        $("#real-data tr:last-of-type").append("<td class='col_" + col_letter + 
          "'><input type='text' id='cell_" + next_row + "_" + col_letter + 
          "' name='cell_" + next_row + "_" + col_letter +"' value=''></td>");
        col_a_int++;
    };
});

$('#row_remove').click(function() {
    var last_row = parseInt($('#real-data tr:last-of-type > td:last-of-type > input').attr('id').split('_')[1]);
    if (last_row <= 1){ alert("you can not delete any more rows");
    } else { $("#real-data tr:last-of-type").remove(); }
});





document.getElementById("svg_1").style.width = 50 + "px"

//overcompensate size of svg using x/y coordinates
//pad the coordinates by 10 or something

//Math.max()  to find largest #

// or if array already exists
// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }
xx = document.getElementById("poly_1").getAttribute("points")
yy = "45,67 12,56" //or whatever points....in string format
document.getElementById("poly_1").setAttribute("points", xx + " " + yy)

