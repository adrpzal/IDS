let getAPI = document.getElementById("getAPIBtn");
getAPI.addEventListener('click', function(){

    let listado = document.getElementById("pokeGrid");

    fetch('https://pokeapi.co/api/v2/pokemon?limit=16&offset=0')
        .then(response =>{return response.json()})
        .then(data =>{
            console.log(data)
            data.results.forEach(item => {
                //revisamos los nombres obtenidos
                console.log(item.name);

                listado.innerHTML += `
                <div class="pokeCard">
                    <h4>${item.name}</h2>
                    <div><a href="${item.url}">Informaciòn</a></div>
                    <div id="imgContainer${item.name}"></div>
                </div>
                `;
                let imgContainerID = `imgContainer${item.name}`
                getDataPoke(item.url,imgContainerID);
            })
        })
        .catch(error =>{console.error(error)});
})

function getDataPoke(url,imcgContainerID) {
    let img = document.getElementById(imcgContainerID);

    fetch(url)
        .then(response =>{return response.json()})
        .then(data =>{
            //nombre y liga de imagen del pokemon
            console.log(`Pokemon: ${imcgContainerID}`)
            console.log(data.sprites.front_shiny)
            img.innerHTML = `<img src="${data.sprites.front_shiny}"/>`;
        })
        .catch(error =>{console.error(error)})

}

