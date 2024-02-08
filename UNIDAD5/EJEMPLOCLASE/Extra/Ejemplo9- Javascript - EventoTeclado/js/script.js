document.addEventListener("DOMContentLoaded", function () {

	// Select the paragraph where we will change the background color
	const colorChangeParagraph = document.getElementById("color-change");

	// Add a keydown event listener to the document
	document.addEventListener("keydown", event => {
		// Check if the "B" key was pressed
		if (event.key === "b") {
			// Change the background color of the paragraph to blue
			colorChangeParagraph.style.backgroundColor = "blue";
		}
	});
	
});
