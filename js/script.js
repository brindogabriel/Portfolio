//* ACTIVAR TOOLTIP EN TODOS LADOS
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

//* SCROLLSPY
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
})
document.addEventListener("DOMContentLoaded", function() {
    var botonIrArriba = document.getElementById("botonIrArriba");
    botonIrArriba.style.display = "none"; // Asegura que el botón esté oculto al cargar la página

    window.onscroll = function () {
        // Verifica si el desplazamiento vertical es mayor que 100px
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            botonIrArriba.style.display = "block"; // Muestra el botón
        } else {
            botonIrArriba.style.display = "none"; // Oculta el botón
        }
    };
});