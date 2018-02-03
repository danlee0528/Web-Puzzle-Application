var num_clicks = 0;
var correct_cells;
var marked_cells = []; // contain marked cells
var MAX_CLICKS = 44;

function mark_n_count(x){
	//After marking a cell, increment click counter
		if ( (x.style.backgroundColor != "black" ) && !(num_clicks >= MAX_CLICKS)  && (x.style.backgroundColor != "grey")){
			increment_click();
			mark_cell(x);
			marked_cells.push(x);
		}

		if (num_clicks == MAX_CLICKS){
			if (is_solution_correct()){
				alert("Congratulations! You got me :]");
			}else{
				alert("Sorry, your guess was not correct :[");
			}
		}
}

function increment_click(){
	num_clicks++;
	document.getElementById("count").innerHTML = num_clicks + "/" + MAX_CLICKS;
}

function is_solution_correct(){
	correct_cells = document.getElementsByClassName("correct_cell");
	console.log("Correct Cells:",correct_cells);
	console.log("Marked Cells:",marked_cells);

	for (var i =0; i < correct_cells.length; i ++){
		//If any of the correct cells has not been checked
		if (correct_cells[i].style.backgroundColor != "black"){
				return false;
		}
	}
	return true;
}

function mark_cell(x){
	x.style.backgroundColor = "black";
}

function reset_table(){
	correct_cells = document.getElementsByClassName("correct_cell");
	num_clicks = 0;
	document.getElementById("count").innerHTML = num_clicks + "/" + MAX_CLICKS;
	console.log('reset clicked');

	for (var i =0; i <marked_cells.length; i++){
		marked_cells[i].style.backgroundColor = "transparent";
	}

	for (var i =0; i <correct_cells.length; i++){
		correct_cells[i].style.backgroundColor = "transparent";
	}

	marked_cells = []; // empty
}

function reveal_table(){
	correct_cells = document.getElementsByClassName("correct_cell");
	console.log('reveal btn clicked');
		for (var i =0; i <correct_cells.length; i++){
			if ( correct_cells[i].style.backgroundColor == "black" &&  correct_cells[i].style.backgroundColor != "red"){
				correct_cells[i].style.backgroundColor = "grey";
			}else if ( correct_cells[i].style.backgroundColor != "grey"){
				correct_cells[i].style.backgroundColor = "red";
			}
		}
}

function hide_table(){
		correct_cells = document.getElementsByClassName("correct_cell");
		console.log('hide btn clicked');
			for (var i =0; i <correct_cells.length; i++){
				if ( correct_cells[i].style.backgroundColor == "grey"){
					correct_cells[i].style.backgroundColor = "black";
				}else if ( correct_cells[i].style.backgroundColor == "red"){
					correct_cells[i].style.backgroundColor = "transparent";
				}
			}
}
