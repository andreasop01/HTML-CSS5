document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el botón con el ID "change-color-button"
    var changeColorButton = document.getElementById("change-color-button");
  
    // Agregamos un event listener para escuchar el evento "click" del botón
    changeColorButton.addEventListener("click", function() {
      // Obtenemos el body de la página
      var body = document.getElementById("body");
  
      // Generamos un color aleatorio en formato hexadecimal
      var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
      // Cambiamos el color de fondo del body a nuestro color aleatorio
      body.style.backgroundColor = randomColor;
    });
  });
