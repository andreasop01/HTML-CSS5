document.addEventListener("DOMContentLoaded", function () {
  
  // Select all the elements with the class "box"
const boxes = document.querySelectorAll(".box");

// Loop through the boxes and add a click event listener
boxes.forEach(box => {
	box.addEventListener("click", () => {
		// Get the current background color of the box
		const currentColor = box.style.backgroundColor;

		// Toggle between red, green, and blue
		switch (currentColor) {
			case "red":
				box.style.backgroundColor = "green";
				break;
			case "green":
				box.style.backgroundColor = "blue";
				break;
			case "blue":
				box.style.backgroundColor = "red";
				break;
			default:
				box.style.backgroundColor = "red";
				break;
		}
	});
});



});
