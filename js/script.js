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


window.onscroll = function () {
    var botonIrArriba = document.getElementById("botonIrArriba");

    // Verifica si el desplazamiento vertical es mayor que 0
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        botonIrArriba.style.display = "block"; // Muestra el botón
    } else {
        botonIrArriba.style.display = "none"; // Oculta el botón
    }
};
