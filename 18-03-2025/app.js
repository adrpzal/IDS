//window
//document

// //buscar elementos en el dom, crear elementos y eliminar elementos
// // buscar nodo(tag, nodes, event target, object)

// const box = document.getElementById('box'); // retorna o un nodo o NULL
// box.style.backgroundColor = 'red' // TypeError

// console.log(box.__proto__);

// const span = document.querySelector('span');
// span.style.backgroundColor = 'black';

// // buscar etiquetas
// const listOfDivs = document.querySelectorAll('div');
// console.log(listOfDivs)


// // crear etiquetas
// const newDiv = document.createElement('div');
// newDiv.innerText = 'Soy el div nuevo';
// // agregar etiquetas al DOM
// // window.document
// document.body.appendChild(newDiv);
// console.log(document.body)


// 1.- Buscar elementos en el dom 

// 2.- Crear y eliminar elementos

// 3.- Modificar atributos

// 4.- Modificar estilos y clases

// 5.- Modificar el contenido

const callback = (resolve, reject) => {
    let exito = true;
    setTimeout(()=>{
        if(exito === true){
            console.log('algo paso')
            resolve('cumplido, si me amo toda la vida')
        }
        else{
            reject('no se cumplio con esta morra')
        }
    },2000);
};

const promise = new Promise(callback) //controlar acciones asincronas

console.log(promise)
promise
.then((result)=>{
    console.log(result);
    console.log(promise);
})
.catch(error =>{
    console.log(error)
})

const obtenerInfoPokemon = ()=>{
    const url= 'https://pokeapi.co/api/v2/pokemon/ditto'
    fetch(url)
    .then((result)=> {
        console.log(result)
        return result.json()
    })
    .then(data => {
        console.log(`La infor de ditto ${data}`)
        console.log(data.sprites.front_default);
    })
    .catch((error) => {
        console.log(error);
    })

}

obtenerInfoPokemon();