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
    console.log(texto)    

    if (texto.length < 3) {
        return
    }    
    listado.filter((element) => {
        if (element == texto) {
            console.log("MATCH");
        }
    })
})