var squareCount = 6;

var colors = generateRandomColors(squareCount);

var squares = document.querySelectorAll(".square");
var randomIndex = Math.floor(Math.random() * (squareCount + 1));
console.log(randomIndex)
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");
console.log(modeButtons);
for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		console.log(this);
		this.classList.add("selected");
		this.textContent === "Easy" ? squareCount = 3: squareCount = 6;
		// if (this.textContent === "Easy") {
		// 	squareCount = 3;
		// } else {
		// 	squareCount = 6;
		// }
		reset();
	});
}

function reset() {
	resetButton.textContent = "New Colors";

	messageDisplay.textContent = "";
	/// generate all new colors
	colors = generateRandomColors(squareCount);
	console.log(squareCount);
	pickedColor = pickColor();
	/// pick a new random color from array
	colorDisplay.textContent = pickedColor;
	/// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "#232323";
}

// easyBtn.addEventListener("click", function() {
// 	// alert("easyBtn")
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	squareCount = 3;
// 	colors = generateRandomColors(squareCount);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function() {
// 	// alert("hardBtn")
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	squareCount = 6;
// 	colors = generateRandomColors(squareCount);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// })


resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	/// add initial colos to squares
	squares[i].style.backgroundColor = colors[i];

	/// add click listeners to squares
	squares[i].addEventListener("click", function() {
		///grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			// alert("Correct");
			messageDisplay.textContent = "Correct";
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			console.log(clickedColor, pickedColor);
		}
		/// compare color to pickedColor
	});
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColors(color) {
	/// loop through all squares
	/// change each colors to match given color
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	 var random = Math.floor(Math.random() * colors.length);
	 return colors[random]
}