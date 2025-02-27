let getAPI = document.getElementById("getAPIBtn");
getAPI.addEventListener('click', function(){

    let listado = document.getElementById("pokeGrid");
    listado.innerHTML = "";
    let cardContent = "";

    fetch('https://pokeapi.co/api/v2/pokemon?limit=16&offset=0')
        .then(response =>{return response.json()})
        .then(data =>{
            console.log(data)

            //generamos carta por carta
            data.results.forEach(item => {
                //revisamos los nombres obtenidos
                console.log(item.name);

                let imgContainerID = `imgContainer${item.name}`;
                cardContent += `
                <div class="pokeCard">
                    <h4>${item.name}</h4>
                    <div><a href="${item.url}">Informaciòn</a></div>
                    <div id="${imgContainerID}" class="contenedorInfoImagen"></div>
                </div>
                `;
                
                getDataPoke(item.url,imgContainerID);
            })
            //despues de generar todas las tarjetas, dibujamos
            listado.innerHTML = cardContent;
        })
        .catch(error =>{console.error(error)});
})

function getDataPoke(url,imgContainerID) {    
    //identificamos contenedor de imagen (no funciona)
    let img = document.getElementById(imgContainerID);
    fetch(url)
        .then(response =>{return response.json()})
        .then(data =>{
            //nombre y liga de imagen del pokemon
            console.log(`Pokemon: ${imgContainerID}`);
            console.log(data.sprites.front_shiny);

            //identificamos contenedor de imagen (si funciona)
            let img = document.getElementById(imgContainerID);
            img.innerHTML = `
            <img src="${data.sprites.front_shiny}" onclick="showData(${data.id})"/>
            <div class="infoPokemon" id="pokemon${data.id}">
            <span>Altura: ${data.height}</span>
            <span>${data.height}</span>
            <span>${data.height}</span>
            </div>
            `;
        })
        .catch(error =>{console.error(error)});
}

function showData(id) {    
    let divID = "pokemon"+id;
    console.log("el id es: "+divID)
    let descript = document.getElementById(divID);
    descript.style.display = "block";
}



