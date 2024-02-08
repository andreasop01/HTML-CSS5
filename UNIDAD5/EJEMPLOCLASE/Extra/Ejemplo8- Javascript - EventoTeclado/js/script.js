document.addEventListener("DOMContentLoaded", function () {

	// Select the paragraph where we will display the ASCII code
	const asciiParagraph = document.getElementById("ascii");

	// Add a keydown event listener to the document
	document.addEventListener("keydown", event => {
		// Get the ASCII code of the key that was pressed
		
		// Get the value of the key that was pressed
		const keyCode = event.keyCode;

		// Display the ASCII code in the paragraph
		asciiParagraph.textContent = `The ASCII code for the key you pressed is ${keyCode}.`;
	});

});
