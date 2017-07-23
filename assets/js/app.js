var cargarPagina = function () {
    materialize();
    insertar();
}

var materialize = function () {
    $(".bton-side").sideNav();
    $(".dropdown-button").dropdown();
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 55, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
}

var insertar = function () {
    localStorage.getItem("foto");
    localStorage.getItem("nombre");
    localStorage.getItem("apellido");
    localStorage.getItem("mail");
    localStorage.getItem("cumple");
    localStorage.getItem("genero");
    localStorage.getItem("residencia");
    localStorage.getItem("user");
    
    $(".name").text(localStorage.getItem("nombre")+" "+
    localStorage.getItem("apellido"));
    $(".nombre").text(localStorage.getItem("nombre");
    $(".apellido").text(localStorage.getItem("apellido"));
    $(".mail").text(localStorage.getItem("mail"));

}

$(document).ready(cargarPagina);
