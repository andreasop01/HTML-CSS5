document.addEventListener("DOMContentLoaded", function () {

	// Select the box element
	const box = document.getElementById("box");

	// Add a click event listener to the box
	box.addEventListener("click", event => {
		// Change the background color of the box to pink
		box.style.backgroundColor = "pink";
	});


});
