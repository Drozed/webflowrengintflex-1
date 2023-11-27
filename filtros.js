"use strict";
(() => {
  console.log("alerta");
  //Obtengo las marcas que estan en los divs de la collection
  var atributostoshow = [];
  var  marcas = document.querySelectorAll('[dv-filtros-campo="Marca"]');
  marcas.forEach(function(elemento){
    elemento.setAttribute("cms-marca",elemento.innerHTML);
    var atributo = elemento.getAttribute("cms-marca")
    atributostoshow.push(atributo);
  })

  
  var checkboxes = document.querySelectorAll('[chk="Marca"]');
  checkboxes.forEach(function(elemento){
    elemento.setAttribute("Marca",elemento.querySelector("span").innerHTML);
  })

  showCheckboxes(atributostoshow);

  function showCheckboxes(checkboxesToDisplay) {

    // Muestra solo las checkboxes que están en el arreglo
    checkboxesToDisplay.forEach(function(atributo) {
      console.log(atributo);
      var checkbox = document.querySelector(`[marca="${atributo}"]`);
      console.log(checkbox);
      if (checkbox) {
        console.log("entre");
        checkbox.classList.remove("c-hidden");
      }
    });
  }


  // showCheckboxes(10);
  
  // function showCheckboxes(numToShow) {
  //   // Obtiene todas las checkboxes
  //   var checkboxes = document.querySelectorAll('[chk="Marca"]');

  //   // Oculta todas las checkboxes
  //   checkboxes.forEach(function (checkbox) {
  //     checkbox.classList.add("hidden");
  //   });

  //   // Muestra las primeras 'numToShow' checkboxes
  //   for (var i = 0; i < numToShow; i++) {
  //     checkboxes[i].classList.remove("c-hidden");
  //   }
  // }

})();