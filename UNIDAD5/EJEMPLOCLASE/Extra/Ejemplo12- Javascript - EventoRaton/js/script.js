document.addEventListener("DOMContentLoaded", function () {

	const box = document.querySelector('#box');
	const coords = document.querySelector('#coords');
	
	box.addEventListener('mousemove', (event) => {
	  const x = event.clientX - box.offsetLeft;
	  const y = event.clientY - box.offsetTop;
	
	  coords.textContent = `X: ${x}, Y: ${y}`;
	});
	
});
