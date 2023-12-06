"use strict";
(() => {
  console.log("alerta");
  //Obtengo las marcas que estan en los divs de la collection
  let atributostoshow = [];
  let marcas = document.querySelectorAll('[dv-filtros-campo="Marca"]');
  marcas.forEach(function (elemento) {
    elemento.setAttribute("cms-marca", elemento.innerHTML);
    let atributo = elemento.getAttribute("cms-marca")
    atributostoshow.push(atributo);
  })


  let checkboxes = document.querySelectorAll('[chk="Marca"]');
  checkboxes.forEach(function (elemento) {
    elemento.setAttribute("Marca", elemento.querySelector("span").innerHTML);
  })

  showCheckboxes(atributostoshow);

  function showCheckboxes(checkboxesToDisplay) {

    // Muestra solo las checkboxes que están en el arreglo
    checkboxesToDisplay.forEach(function (atributo) {
      console.log(atributo);
      let checkbox = document.querySelector(`[marca="${atributo}"]`);
      checkbox.setAttribute("showmarca", "Si");
      // if (checkbox) {
      //   console.log("entre");
      //   checkbox.classList.remove("c-hidden");
      // }
    });
    let showmarcas = document.querySelectorAll('[showmarca="Si"]');
    showmarcas.forEach(function (element) {
      element.classList.remove("c-hidden");
    })
  }

  // let  lineas = document.querySelectorAll('[dv-filtros-campo="Linea"]');
  // lineas.forEach(function(elemento){
  //   elemento.setAttribute("cms-linea",elemento.innerHTML);
  // })

  //FILTRO LINEAS

  let txtFiltroMarca = document.querySelector('[txtFiltro="Marca"]')
  let chkMarca = document.querySelectorAll('[showmarca="Si"]');
  // chkLinea.forEach(function (elemento) {
  //   elemento.setAttribute("Marca", elemento.querySelector("span").innerHTML);
  // })

  //Filtro Top 10
  // showCheckboxesRange(10);


  // function showCheckboxesRange(numToShow) {
  //   // Obtiene todas las checkboxes
  //   let chkLinea = document.querySelectorAll('[chk="Linea"]');

  //   // Oculta todas las checkboxes
  //   // chkLinea.forEach(function (checkbox) {
  //   //   checkbox.classList.add("hidden");
  //   // });

  //   // Muestra las primeras 'numToShow' checkboxes
  //   for (let i = 0; i < numToShow; i++) {
  //     chkLinea[i].classList.remove("c-hidden");
  //   }
  // }

  txtFiltroMarca.addEventListener('input', function () {
    let filtroTexto = txtFiltroMarca.value.toLowerCase();

    chkMarca.forEach(function (chk) {
      let atributo = chk.getAttribute("Marca".toLowerCase());
      let textoVisible = atributo.includes(filtroTexto);

      // if (filtroTexto.length > 0) {
      if (textoVisible) {
        chk.classList.remove("c-hidden");
      } else {
        chk.classList.add("c-hidden");
      }
      // } else {
      //   showCheckboxes(atributostoshow);
      // }
    });
  });

})();
