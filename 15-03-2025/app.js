// // funcion expression
// const baz = function () {console.log('ajajas')};
// baz();

// //funcion retornada desde otra funcion
// function saludar(){
//     return function () {
//         console.log('mensaje dentro de la funcion que se retorna')
//         console.log('OJO')
//         console.log('estos mensajes se ejecutaran si......')
//     }
// }
// const resultSaludar = saludar();
// resultSaludar();

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

// const btn = document.querySelector('button')

// const fun1 = function () {console.log(this)}

// const fun2 = ()  => {let that = this; console.log(that)}



// const obj = {nombre: 'lalaal'}
// btn.addEventListener('click', function(event){
//     fun1();

// })


function PersonaF(nombre,edad,sexo) {
    let persona = {
        nombre,
        edad,
        sexo,
        saludar(){
        console.log(`HOLA SOY ${this.nombre}`)}
    }
    return persona
}


const alberto = PersonaF('ALBERTO', 40, 'M')
alberto.saludar();

const monse = PersonaF('MONSE', 22, 'F');
monse.saludar();

console.log(alberto,monse);


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
/////////////// UTILIZANDO NEW //////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// function Persona(nombre,edad,sexo) {
//     this.nombre = nombre,
//     this.edad = edad,
//     this.sexo = sexo,
//     this.saludar = function(){
//         console.log(`HOLA SOY ${this.nombre}`)
//     }
// }

// const emilio = new Persona('EMILIO', 29, 'M')
// console.log(emilio)



/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////// CON CLASES  /////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// objeto: abstraccion de un objeto de la vida real
// clase: mecanismo para construir un objeto , en js es prototipo
// class Persona {
//     // propiedades: caracteristica que tiene un objeto
//     constructor(nombre,edad,sexo){
//         // propiedad publica, los valores de esas propiedades se pueden acceder (API publica)( en wbecomponents son atributos)
//         this.nombre = nombre;
//         // this._nombre propiedad privada para calculos internos de la clase
//         // this.__nombre propiedad
//         this.edad = edad;
//         this.sexo = sexo;
//     }

//     // metodos: acciones que puede hacer un objeto de tipo persona
//     saludar(){
//         console.log(`Hola soy ${this.nombre}`)
//     }
// }


// const jeronimo = new Persona('JERONIMO', 29, 'M')
// console.log(jeronimo)
// jeronimo.saludar();

// const palabra = 'fghdf'
// const numeroo = 54646
// const buleano = true
// console.log(typeof buleano)
// console.log(typeof numeroo)
// console.log(typeof jeronimo)


// objeto: abstraccion de un objeto de la vida real
// clase: mecanismo para construir un objeto , en js es prototipo
class Carro{
    constructor(puertas=4, anio){
        // propiedad publica, los valores de esas propiedades se pueden acceder (API publica)( en wbecomponents son atributos)
        this.puertas = puertas;
        // this._modelo propiedad privada para calculos internos de la clase
        // this.__modelo propiedad
        this._modelo ='generico';
        this.__anio = anio ?? 2025; // nullish coleasing operator
    }
    // metodos: acciones que puede hacer un objeto de tipo persona
    mover(){
        if(this.__anio>2024){
            this._modelo ='S4'
        }
        console.log(`El ${this._modelo} hace corre muy rapido`)
    }
}
const bmw = new Carro(5)
bmw.mover();

class Persona extends Carro{
    // propiedades: caracteristica que tiene un objeto
    constructor(nombre,edad,sexo){
        super(4, 2024);
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    // metodos: acciones que puede hacer un objeto de tipo persona
    saludar(){
        console.log(`Hola soy ${this.nombre}`)
    }
}

const jeronimo = new Persona('JERONIMO', 29, 'M')
jeronimo.saludar();
jeronimo.mover();
console.log(Object.getPrototypeOf(jeronimo));