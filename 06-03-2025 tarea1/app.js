let etiquetas = document.querySelectorAll(".tagdata");
let arrayFilters = [];

// evaluamos para cada tagdaat
etiquetas.forEach(function (etiqueta) {    
    // si hacemos click en un tag
    etiqueta.addEventListener("click", function (event) {
        let txtTag = event.target.textContent;

        console.log(`Seleccionaste ${txtTag}`)
        // agregamos tag al arreglo de tags
        if (!arrayFilters.includes(txtTag)) {            
            arrayFilters.push(txtTag);
            console.log(arrayFilters)
            showFilters(txtTag);
        }
    })
})



function showFilters(etikt) {

    // identificamos caja de filtro
    let filterBox = document.getElementById("filter");   
    filterBox.style.display ="block";

    // creamos etiqueta virtual
    let tag = document.createElement("span");
    tag.textContent = etikt;
    tag.className = "tagdata";

    // añadimos etiqueta a la caja de filtro
    filterBox.appendChild(tag);

    ////////////////////////////////////////////////////
    // evaluamos las cards
    let cards = document.querySelectorAll(".card");    
    cards.forEach(function (card) {
        // obtenemos todas las etiquetas por card
        let etikts = card.querySelectorAll(".tagdata")

        // revisamos etiqueta por etiqueta de la carta
        etikts.forEach(function (etiq) {
            let etiqetaTxt = etiq.textContent;
            // si la etiqueta se encuentra en nuestra lista de filtros, debemos esconder las demas
            if (arrayFilters.includes(etiqetaTxt)) {
                card.style.display ="none"
            }
        })
        
    })
}

function hideCarda(card) {
    
}