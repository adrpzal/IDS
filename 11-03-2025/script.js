console.log('HOLA ESTE ES MI PRIMER SCRIPT');

let nombre = 'aldo';
nombre[0] = 'Ron'; // tipo de dato primitivo y eso significa que es inmutable
console.log(nombre);
nombre = 'Ronaldo';
let edad = 30;
let masculino = true;
let sobrinos = null;
let papas = undefined;
let id = Symbol("foo");
let saldo = 1231231829737891723n;

const number1 = Number('0')
const number2 = Number(2+3)
const number3 = Number(true)
const number4 = Number(false)
const number5 = Number([].length)
console.log("NUMEROSSSSSSS")
console.log(number1)
console.log(number2)
console.log(number3)
console.log(number4)
console.log(number5)

const number11 = new Number('0')
const number21 = new Number(2+3)
const number31 = new Number(true)
const number41 = new Number(false)
const number51 = new Number([].length)
console.log("NUMEROSSSSSSSx10")
console.log(number11)
console.log(number21)
console.log(number31)
console.log(number41)
console.log(number51)

console.log(typeof nombre, typeof edad);
// POO => abstraccion de un objeto de la vida real
const persona = {
    nombre: 'Aldo',
    edad: 30,
    papas: [{nombre: 'Aldo', edad: 30}]
}; // literal object
persona.nombre = 'Ronaldo';
// persona['nombre']; // 'Ronaldo'
console.log(persona);
const aldo = persona; // direccion de memoria
aldo.nombre = 'Rogelio';
console.log(persona); // ronaldo
console.log(aldo); // rogelio

let coleccion = ['aldo', 'magaly', 'judit'];
// coleccion[0] // 'aldo'
// coleccion[1] // 'magaly'
// coleccion[2] // 'judit'
console.log(coleccion[0]);

const arreglo = [3,0,1,2,3,3,5];

const set = new Set(arreglo); // arreglo 
console.log(set);

console.log(set.size);
set.add('asd');
console.log(set);
console.log(set.size);
set.add('5');
console.log(set);
console.log(set.size);
console.log(set.delete(5));
console.log(set.delete(5));
console.log(set);
console.log(set.size);
console.log(set.has('15'));


const map = new Map();
map.set(1, "valor1");
const value = map.has(1);
console.log(value);
const otherValue = map.get(1);
console.log(otherValue);
let deleteResult = map.delete(0);
console.log('eliminando');
console.log(deleteResult);
console.log(map)
map.clear();
console.log(map);
console.log(map.size);

const otherMap = new Map([
    ['val1', 1],
    ['val2', 2],
    ['val', 3],
])


console.log(otherMap)




