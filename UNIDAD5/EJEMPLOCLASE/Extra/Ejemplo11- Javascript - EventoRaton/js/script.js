document.addEventListener("DOMContentLoaded", function () {

	// Select the box element
	const box = document.getElementById("box");

	// Add a double click event listener to the box
	box.addEventListener("dblclick", event => {
		// Change the background color of the box to yellow
		box.style.backgroundColor = "yellow";
	});

});
