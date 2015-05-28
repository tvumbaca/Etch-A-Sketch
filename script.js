// Sketchpad / Etch-A-Sketch project for The Odin Project
// http://www.theodinproject.com/web-development-101/javascript-and-jquery

$(document).ready(function(){

	newGrid(16, 1); // Sets up an initial 16x16 grid with default hover effect.

	// These are the on-click events for each of the 4 buttons that set up a new grid for each type of hover effect.
	$( "#resetButton" ).on("click", function(event) {
		var y = prompt("How many squares accross do you want?");
		newGrid(y, 1);	
	});

	$( "#randomColor" ).on("click", function(event) {
		var y = prompt("How many squares accross do you want?");
		newGrid(y, 2);
	});

	$( "#blackOpacity" ).on("click", function(event) {
		var y = prompt("How many squares accross do you want?");
		newGrid(y, 3);
	});

	$( "#trail" ).on("click", function(event) {
		var y = prompt("How many squares accross do you want?");
		newGrid(y, 4);
	});

	// Creates the new grid size based on user input from when one of the buttons was clicked and sets up the hover effect. 
	function newGrid(x, hoverState){

		var divNum = x;

		//clears all of the current grid before the new grid is built.
		$("#container").empty();
		
		var size = 100 / divNum;
		var newRow = '';
		var newDivs = '';

		// for loop to build the divs for the grid.
		for (var i = 1; i <= divNum; i += 1) {
			newRow  += "<div class='rowContainer' style='height: " + size + "%;'></div>";
			newDivs  += "<div class='gridDiv' style='width: " + size + "%;'></div>";
		}
		$("#container").append(newRow);
		$(".rowContainer").append(newDivs);
		
		if (hoverState == 1) {  // Default hover effect.
			$(".gridDiv").hover(function() {
	    			$(this).addClass("divHover");
			});
		} else if (hoverState == 2) {  // Random color hover effect
			$(".gridDiv").hover(function() {
				var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + 
				(Math.floor(Math.random() * 256)) + ',' + 
				(Math.floor(Math.random() * 256)) + ')';
				$(this).css("background-color", hue);
			});
		} else if (hoverState == 3) {  // Shades of black hover effect - increases opacity by 10% with each pass.
			$(".gridDiv").mouseenter(function() {
				var shade = $(this).css("opacity");
				var bgColor = $(this).css("background-color");
				
				if ((shade == 1) && (bgColor == "rgb(209, 233, 246)")) {   // !NOTE! Had to use RGB color since browser only returns RGB value when getting the value for bgColor.
					$(this).css({"background-color":"#000", "opacity":0.1}); // when initial bg color is detected this sets a new bg color to black at 10% opacity.
				} else {
					// !NOTE! The plus sign helps to make the jquery object plus 0.1 will return a number instead of a string.
					$(this).css("opacity", +$(this).css("opacity")+0.1); // increases opacity by 10%.
				}
			});
		} else if (hoverState == 4) {  // Trails hover effect
			$(".gridDiv").mouseenter(function() {
				$(this).css("background-color", "#06F");
				$(this).fadeTo(400, 0.1);
			});
			$(".gridDiv").mouseleave(function() {
				$(this).fadeTo("slow", 1);
				$(this).css("background-color", "rgb(209, 233, 246)");
			});
		} else {
			$(".gridDiv").hover(function() {
	    			$(this).addClass("divHover");
			});
		};
	}
});