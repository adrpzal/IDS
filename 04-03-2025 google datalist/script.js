let seleccion = document.getElementById("pais");
let txtsearch = "https://www.google.com/search?q=";

seleccion.addEventListener("change", function () {
    console.log(seleccion.value)
    window.location.href = txtsearch+seleccion.value;
})