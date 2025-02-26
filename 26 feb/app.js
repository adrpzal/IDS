let getAPI = document.getElementById("getAPIBtn");
getAPI.addEventListener('click', function(){

    let listado = document.getElementById("pokeList");

    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            console.log(data)
            data.results.forEach(item => {
                console.log(item.name);
                listado.innerHTML += '<div class="elemento"><li>'+item.name+', url info: '+item.url+'</li></div>';
            })
        })
        .catch(error =>{
            console.error(error);
        })

})

