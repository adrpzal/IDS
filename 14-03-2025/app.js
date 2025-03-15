// OPERADORES LOGICOS
// FUNCIONES

let persona = {nombre: 'adrian',edad: 25, sexo: 'M'}
/**
 * Metodo para mover el cuerpo de una persona
 * @param {Object} persona 
 */
function moverCuerpo(persona) {
    console.log(`Se està moviendo ${persona.nombre}`)

    if (persona.edad>18) {
        console.log(`${persona.nombre} es mayor de edad y su edad es ${persona.edad}`)
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
    return function () {console.log('JHGJHFHGFHDGHDGF')
    }
    // return 'el usuario se llama' + persona.nombre
}

// moverCuerpo(persona);
// moverCuerpo({nombre: 'juan', edad: 34, sexo: 'M'});
// moverCuerpo({nombre: 'sarai', edad: 16, sexo: 'F'});

const resultado = moverCuerpo({nombre: 'rocio', edad: 16, sexo: 'F'})
console.log(`el valor de resultado es : ${resultado}`);
moverCuerpo({nombre: 'rocio', edad: 16, sexo: 'F'})

function myOwnReduce( array = [], callback, initialValue = 0){
    let acumulador = initialValue;
    for(let i=0; i<array.length; i++){
        acumulador = callback(acumulador, array[i]);
    }
    return acumulador;
}



const r = myOwnReduce([1,2,3], function (acumulador, item) {
    acumulador += item;
    // undefined + 10 => NaN
    return acumulador;
});

console.log(r);



// funcion expression
const baz = function () {console.log('ajajas')};
baz();

//funcion retornada desde otra funcion
function saludar(){
    return function () {
        console.log('mensaje dentro de la funcion que se retorna')
        console.log('OJO')
        console.log('estos mensajes se ejecutaran si......')
    }
}
const resultSaludar = saludar();
resultSaludar();

// una funcion pasada como argumento a otra funcion (callback)
/**
 * 
//  * @param {*} obtenerNombre 
//  */
// function despedir(obtenerNombre) {
//     const resultado = obtenerNombre();
//     console.log(resultado);    
// }

// despedir(function () {
//     return 'mi nombre es adriannnnn';
// })


// function getPokemonData(){
//     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(function (response) {
//         console.log('INFORMACION');
//         console.log(response);
//         return response.json();        
//     })
//     .then(function (realResponse) {
//         console.log(('INFORMACION DEL SERVICIO'));
//         console.log(realResponse);
//         const img = document.createElement('img');
//         img.src=realResponse.sprites.front_shiny;
//         document.body.appendChild(img);
        
//     })

// }

// getPokemonData();



// /**
//  * METODO PARA SUMAR DOS VALORES
//  * @param {Number} a
//  Nu @param {Number} b 
//  */
// const sumar = (a, b) => {
//     return a + b;
// };

// const res = sumar(10,10);
// console.log(res);


// const calculadora = (a,b, operacion) => {
    
//     switch (operacion) {
//         case 'suma':
//             const suma = a+b;
//             return suma;
//             break;
//         case 'resta':
//             const resta = (a,b) => a-b;
//             resultado 
//             break;
//         case 'multiplicacion':
//             const mul = (a,b) => a*b;
//             return mul
//             break;
//         case 'division':
//             const divsion = (a,b) => a/b;
//             return division
//             break;
//         case 'residuo':
//             const residuo = (a,b) => a%b;
//             return residuo
//             break;
    
//         default:
//             break;
//     }

// }

// console.log('CALCULADORA');
// let  res2 = calculadora(5,2,'suma');
// console.log(res2);


const btn = document.querySelector('button')

const fun1 = function () {console.log(this)}

const fun2 = (obj)  => {console.log(this)}



const obj = {nombre: 'lalaal'}
btn.addEventListener('click', event =>{
    fun2(obj);
    // console.log(obj)
})
//carros casass animales computadoras celulares


function Carro(combustible,modelo,marca ){
    let carro={
        combustible: combustible,
        modelo: modelo,
        marca: marca,
    };
    return carro
}
function Casa(tamano,cuartos,focos ){
    let casa={
        tamano: tamano,
        cuartos: cuartos,
        focos: focos,
    };
    return casa
}
function Animal(nombre,tamano,color ){
    let animal={
        nombre: nombre,
        tamano: tamano,
        color: color,
    };
    return animal
}
function Computadora(marca,procesador,pulgadas ){
    let computadora={
        marca: marca,
        procesador: procesador,
        pulgadas: pulgadas,
    };
    return computadora
}
function Telefono(pantalla,modelo,marca ){
    let telefono={
        pantalla: pantalla,
        modelo: modelo,
        marca: marca,
    };
    return telefono
}

const carro1 = Carro('diesel', 2005,'ford')
console.log(carro1)

const casa1 = Casa('grande', 4 , 5)
console.log(casa1)

const animal1 = Animal('leon', 'grande','cafe')
console.log(animal1)

const computadora = Computadora('Lenovo', 'AMD',14)
console.log(computadora)

const telefono1 = Telefono('grande', 'asfgds','Nokia')
console.log(telefono1)