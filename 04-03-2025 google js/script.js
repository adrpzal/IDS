const listado = [
    "Argentina", 
    "Brasil",
    "Canadá",
    "Chile",
    "Colombia",
    "España",
    "Estados Unidos",
    "Francia",
    "Italia",
    "México",
    "Perú",
    "Reino Unido",
];

let dataList = document.getElementById("paises");
let inputTxt = document.getElementById("inputSearch");


inputTxt.addEventListener("input", function (event) {
        
    let texto = event.target.value.toLowerCase();

    let listaFiltrada = listado.filter((element) => {
        return element.toLowerCase().includes(texto);
    });

    console.log(listaFiltrada);        

    dataList.innerHTML = '';
    // creamos lista          
    listaFiltrada.forEach((option) => {
        let opcion = document.createElement('option');
        opcion.value = option;
        dataList.appendChild(opcion)
    });

})


let seleccion = document.getElementById("inputSearch");
let txtsearch = "https://www.google.com/search?q=";

seleccion.addEventListener("change", function () {
    console.log(seleccion.value)
    window.location.href = txtsearch+seleccion.value;
})