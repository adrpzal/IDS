console.log( ' 0==0 ')
console.log( 0==0)

console.log( " 0=='0' ")
console.log( 0=='0')

// OPERADORES LOGICOS
// true && false = false    !!'asdas' & false -- true && false = false
// false && false = false   !!'asdas' && false -- false && false = false
// false && true = false    !'asdasa' && -1 -- false && true = false
// true && true = true      !!'asasa' && !!'asas'

true && true 
console.log(!![] && !![] )

let arreglo = [ !![], ![]]
let reducido = arreglo.reduce((contador, valor) => contador && valor)
console.log(reducido)

console.log('ejemplo 5')
console.log(10 && 'juan')

console.log('ejemplo 6')
console.log(0 && true)


// true || false = true    !!'asdas' || false -- true || false = false
// false || false = false   !!'asdas' || false -- false || false = false
// false || true = true    !'asdasa' || -1 -- false || true = false
// true || true = true      !!'asasa' || !!'asas'

let tabla = document.getElementById('cuerpotabla')
const valores = [ 1, '1', 0, '0', -5, '-5', [], {}, 100, null, undefined, 'palabra' ]
const valoresParsed = [ !!1, !!'1', !!0, !!'0', !!-5, !!'-5', !![], !!{}, !!100, !!null, !!!undefined, !!'palabra' ]
const valoresTxt = [ "1", "'1'", "0", "'0'", "-5", "'-5'", "[]", "{}", "100", "null", "undefined", "'palabra'" ]


let termino1;
let termino2;
let resultadoAND = [];
let resultadoOR = [];
let resultadoNOT = [];

for (let i = 0; i < valores.length; i++) {
    termino1 = valores[i];
    termino2 = valores[i+1];
    resultadoAND.push(termino1 && termino2);
    resultadoOR.push(termino1 || termino2);
    resultadoNOT.push(!termino1 || termino2);
}

generaFilas(resultadoAND,'&&');
generaFilas(resultadoOR,'||');
generaFilas(resultadoNOT,'! (1st)');

function generaFilas(arreglo, operador) {
    for (let i = 0; i < arreglo.length; i++) {    
        const fila = document.createElement('tr')
        const colTer1 = document.createElement('td')
        const colOperador = document.createElement('td')
        const colTer2 = document.createElement('td')
        const colRes = document.createElement('td')
    
        colTer1.textContent = String(valoresTxt[i]);
        colOperador.textContent = operador;
        colTer2.textContent = String(valoresTxt[i+1]);
        colRes.textContent = String(arreglo[i]);
        fila.appendChild(colTer1)
        fila.appendChild(colOperador)
        fila.appendChild(colTer2)
        fila.appendChild(colRes)
    
        tabla.appendChild(fila);
    }
}


// for (let i = 0; i < resultadoAND.length; i++) {    
//     const fila = document.createElement('tr')
//     const colTer1 = document.createElement('td')
//     const colOperador = document.createElement('td')
//     const colTer2 = document.createElement('td')
//     const colRes = document.createElement('td')

//     colTer1.textContent = String(valoresTxt[i]);
//     colOperador.textContent = '&&';
//     colTer2.textContent = String(valoresTxt[i+1]);
//     colRes.textContent = String(resultadoAND[i]);
//     fila.appendChild(colTer1)
//     fila.appendChild(colOperador)
//     fila.appendChild(colTer2)
//     fila.appendChild(colRes)

//     tabla.appendChild(fila);
// }