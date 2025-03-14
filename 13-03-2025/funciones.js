// OPERADORES LOGICOS
// true && false = false    !!'asdas' & false -- true && false = false
// false && false = false   !!'asdas' && false -- false && false = false
// false && true = false    !'asdasa' && -1 -- false && true = false
// true && true = true      !!'asasa' && !!'asas'

// true && true 
// console.log(!![] && !![] )

// let arreglo = [ !![], ![]]
// let reducido = arreglo.reduce((contador, valor) => contador && valor)
// console.log(reducido)

// console.log('ejemplo 5')
// console.log(10 && 'juan')

// console.log('ejemplo 6')
// console.log(0 && true)



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