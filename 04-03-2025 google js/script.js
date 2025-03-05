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
]

let dataList = document.getElementById("paises");
let inputTxt = document.getElementById("inputSearch");
let texto = '';

inputTxt.addEventListener("input", function ({data}) {
    let escrito = data
    // let escrito = event.data
    texto += escrito;
    let listaFiltrada = [];     

    if (texto.length < 3) {return}    
    listaFiltrada = listado.filter((element) => {
       return element === texto || element.includes(texto);
    });

    console.log(listaFiltrada);


    // creamos lsita
    const ul = document.createElement('ol');
    if (listaFiltrada.length > 0) {        
        listaFiltrada.forEach((option) => {
            const li = document.createElement('li');
            li.innerText = option;
            ul.appendChild(li);
            document.body.appendChild(ul);
        });
    }

})