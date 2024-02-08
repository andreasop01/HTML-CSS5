document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos el botón con el ID "change-color-button"
  var changeColorButton = document.getElementById("change-color-button");

  // Agregamos un event listener para escuchar el evento "click" del botón
  changeColorButton.addEventListener("click", function () {
    // Obtenemos todos los elementos <p> de la página
    var paragraphs = document.getElementsByTagName("p");

    // Recorremos cada párrafo y cambiamos el color de texto a rojo
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = "red";
    }
  });

});
