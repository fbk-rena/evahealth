var iniciaChat = function () {
    setTimeout(asist, 1000);
    setTimeout(preg, 3500);
    setTimeout(relax, 5000);
    setTimeout(ok, 9000);
    setTimeout(start, 9000);
}
var asist = function () {
    $("#placeh").removeAttr("placeholder");
     $("#asistente").removeAttr("hidden")
    setTimeout(function () {
        $("#placeh").attr("placeholder", "Escribiendo...");
        1200
    })
}
var preg = function () {
     $("#placeh").removeAttr("placeholder");
    $("#placeh").attr("placeholder", "Escribeme tus dudas...");
    $("#preg").removeAttr("hidden");
    setTimeout(function () {
        $("#placeh").removeAttr("placeholder");
        $("#placeh").attr("placeholder", 'Eva te está escribiendo...');
    }, 700)
   
}
var relax = function () {
    $("#placeh").removeAttr("placeholder");
    $("#placeh").attr("placeholder", "Escribeme tus dudas...");
    $("#relax").removeAttr("hidden");
    setTimeout(function () {
        $("#placeh").removeAttr("placeholder");
        $("#placeh").attr("placeholder", "Escribiendo...");
    }, 1200)
}

var ok = function () {
    $("#placeh").removeAttr("placeholder");
    $("#placeh").attr("placeholder", "Escribeme tus dudas...");
    $("#ok").removeAttr("hidden")
    setTimeout(function () {
        $("#placeh").removeAttr("placeholder");
        $("#placeh").attr("placeholder", "Eva está preparando las preguntas...");
    }, 1500)
}
var start = function (){
    $("#start").removeAttr("hidden")
}
$(document).ready(iniciaChat);
