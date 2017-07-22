var cargarPagina = function () {
  materialize(); 
}

var materialize = function () {
	$(".button-collapse").sideNav();
    $('.slider').slider();
    $(".dropdown-button").dropdown();
}

$(document).ready(cargarPagina);