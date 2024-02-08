document.addEventListener("DOMContentLoaded", function () {
  // Obtenemos el botón con el ID "paragraph-button"
  var paragraphButton = document.getElementById("paragraph-button");

  // Agregamos un event listener para escuchar el evento "click" del botón
  paragraphButton.addEventListener("click", function () {
    // Obtenemos todos los elementos con la clase "paragraph" y los guardamos en un arreglo
    var paragraphs = document.getElementsByClassName("paragraph");

    // Iteramos sobre el arreglo y cambiamos el color del texto a rojo
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = "red";
    }
  });

});
