let tabla = document.getElementById('cuerpotabla')
// OPERADORES LOGICOS


// true || false = true    !!'asdas' || false -- true || false = false
// false || false = false   !!'asdas' || false -- false || false = false
// false || true = true    !'asdasa' || -1 -- false || true = false
// true || true = true      !!'asasa' || !!'asas'



const valstrue = [1,'1', -5, '-5', [], 100, {}, 'palabra', [{}], '0']
const valsfalse = [0, null, '', undefined, 0, null, '', undefined, 0, null]

const resultados = new Map();


setOperation(valstrue,valsfalse,'TF')
setOperation(valsfalse,valsfalse,'FF')
setOperation(valsfalse,valstrue,'FT')
setOperation(valstrue,valstrue,'TT')

/**
 * 
 * @param {*} termino1 
 * @param {*} termino2 
 * @param {*} inicial 
 */
function setOperation(termino1,termino2,inicial) {
    for (let i = 0; i < termino1.length; i++) {

        let valor1= termino1[i];
        let valor1txt= String(valor1);
        let valor1p= !!valor1;
    
    
        let valor2= termino2[Math.floor(Math.random()*termino2.length)];    
        let valor2txt= String(valor2);
        let valor2p= !!valor2;    
    
        let resComp = compara(valor1,valor2); 
        let resCompp = compara(valor1p,valor2p);
        
        resultados.set(`${i}${inicial}`,{
            valkey: `${i+1}(${inicial})`,
            val1: valor1txt, 
            val2:valor2txt, 
            val1p:valor1p, 
            val2p:valor2p, 
            resA:resComp[0], 
            resAp:resCompp[0],
            resO:resComp[1], 
            resOp:resCompp[1],
            resN:resComp[2], 
            resNp:resCompp[2]
        }) 
    }    
}

// // TRUE - FALSE
// for (let i = 0; i < valstrue.length; i++) {

//     let valor1= valstrue[i];
//     let valor1txt= String(valor1);
//     let valor1p= !!valor1;


//     let valor2= valsfalse[Math.floor(Math.random()*valsfalse.length)];    
//     let valor2txt= String(valor2);
//     let valor2p= !!valor2;    

//     let resComp = compara(valor1,valor2); 
//     let resCompp = compara(valor1p,valor2p);
    
//     resultados.set(`${i}TF`,{
//         valkey: `${i+1}(TF)`,
//         val1: valor1txt, 
//         val2:valor2txt, 
//         val1p:valor1p, 
//         val2p:valor2p, 
//         resA:resComp[0], 
//         resAp:resCompp[0],
//         resO:resComp[1], 
//         resOp:resCompp[1],
//         resN:resComp[2], 
//         resNp:resCompp[2]
//     }) 
// }

// // FALSE - FALSE
// for (let i = 0; i < valsfalse.length; i++) {

//     let valor1= valsfalse[i];
//     let valor1txt= String(valor1);
//     let valor1p= !!valor1;


//     let valor2= valsfalse[Math.floor(Math.random()*valsfalse.length)];    
//     let valor2txt= String(valor2);
//     let valor2p= !!valor2;    

//     let resComp = compara(valor1,valor2); 
//     let resCompp = compara(valor1p,valor2p);
    
//     resultados.set(`${i}FF`,{
//         valkey: `${i+1}(FF)`,
//         val1: valor1txt, 
//         val2:valor2txt, 
//         val1p:valor1p, 
//         val2p:valor2p, 
//         resA:resComp[0], 
//         resAp:resCompp[0],
//         resO:resComp[1], 
//         resOp:resCompp[1],
//         resN:resComp[2], 
//         resNp:resCompp[2]
//     }) 
// }

// // FALSE - TRUE
// for (let i = 0; i < valstrue.length; i++) {

//     let valor1= valsfalse[i];
//     let valor1txt= String(valor1);
//     let valor1p= !!valor1;


//     let valor2= valstrue[Math.floor(Math.random()*valstrue.length)];    
//     let valor2txt= String(valor2);
//     let valor2p= !!valor2;    

//     let resComp = compara(valor1,valor2); 
//     let resCompp = compara(valor1p,valor2p);
    
//     resultados.set(`${i}FT`,{
//         valkey: `${i+1}(FT)`,
//         val1: valor1txt, 
//         val2:valor2txt, 
//         val1p:valor1p, 
//         val2p:valor2p, 
//         resA:resComp[0], 
//         resAp:resCompp[0],
//         resO:resComp[1], 
//         resOp:resCompp[1],
//         resN:resComp[2], 
//         resNp:resCompp[2]
//     }) 
// }

// // TRUE - FALSE
// for (let i = 0; i < valstrue.length; i++) {

//     let valor1= valstrue[i];
//     let valor1txt= String(valor1);
//     let valor1p= !!valor1;


//     let valor2= valstrue[Math.floor(Math.random()*valstrue.length)];    
//     let valor2txt= String(valor2);
//     let valor2p= !!valor2;    

//     let resComp = compara(valor1,valor2); 
//     let resCompp = compara(valor1p,valor2p);
    
//     resultados.set(`${i}TT`,{
//         valkey: `${i+1}(TT)`,
//         val1: valor1txt, 
//         val2:valor2txt, 
//         val1p:valor1p, 
//         val2p:valor2p, 
//         resA:resComp[0], 
//         resAp:resCompp[0],
//         resO:resComp[1], 
//         resOp:resCompp[1],
//         resN:resComp[2], 
//         resNp:resCompp[2]
//     }) 
// }

showOperations(resultados, 'AND');
showOperations(resultados, 'OR');
showOperations(resultados, 'NOT');
// console.log(resultados.entries())
// console.log(`los items son: ${resultados.entries()}`)
// resultados.forEach(operacion => console.log(operacion))

/**
 * 
 * @param {*} val1 
 * @param {*} val2 
 * @returns 
 */
function compara(val1,val2){
    let rAnd = val1 && val2;
    let rOr = val1 || val2;
    let rNot = !val1
    let arreglo = []
    arreglo.push(rAnd)
    arreglo.push(rOr)
    arreglo.push(rNot)
    return arreglo
}

/**
 * 
 * @param {*} listado 
 * @param {*} operador 
 */
function showOperations(listado,operador) {
    let counter = 1;
    listado.forEach(function (datosfila) {
            let tipores;
            let tiporesp;
            if (operador === "AND") {tipores = datosfila.resA; tiporesp = datosfila.resAp}
            if (operador === "OR") {tipores = datosfila.resO; tiporesp = datosfila.resOp}
            if (operador === "NOT") {tipores = datosfila.resN; tiporesp = datosfila.resNp}

            const fila = document.createElement('tr')
            const colCont = document.createElement('td')
            const colNum = document.createElement('td')
            const colTer1 = document.createElement('td')
            const colOperador = document.createElement('td')
            const colTer2 = document.createElement('td')
            const colRes = document.createElement('td')
        
            console.log(datosfila)
            colCont.textContent = String(counter);
            colNum.textContent = datosfila.valkey
            colTer1.textContent = `${String(datosfila.val1)} (${datosfila.val1p})`;
            colOperador.textContent = operador;
            colTer2.textContent = `${String(datosfila.val2)} (${datosfila.val2p})`;
            colRes.textContent = `${String(tipores)} (${tiporesp})`;
            // colRes.textContent = `${String(datosfila.resA)} (${datosfila.resAp})`;
            fila.appendChild(colCont)
            fila.appendChild(colNum)
            fila.appendChild(colTer1)
            fila.appendChild(colOperador)
            fila.appendChild(colTer2)
            fila.appendChild(colRes)
            fila.style.hover
        
            tabla.appendChild(fila);
            counter++;
    })
       
    colorCells();
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


// const valores = [ 1, '1', 0, '0', -5, '-5', [], {}, 100, null, undefined, 'palabra', null, [{}], [], undefined, '']
// const valoresParsed = [ !!1, !!'1', !!0, !!'0', !!-5, !!'-5', !![], !!{}, !!100, !!null, !!undefined, !!'palabra', !!null, !![{}], !![], !!undefined, !!'' ]
// const valoresTxt = [ "1", "'1'", "0", "'0'", "-5", "'-5'", "[]", "{}", "100", "null", "undefined", "'palabra'", "null", "[{}]", "[]", "undefined", "''" ]


// let termino1;
// let termino2;
// let resultadoAND = [];
// let resultadoOR = [];
// let resultadoNOT = [];

// for (let i = 0; i < valores.length; i++) {
//     termino1 = valores[i];
//     termino2 = valores[i+1];
//     resultadoAND.push(termino1 && termino2);
//     resultadoOR.push(termino1 || termino2);
//     resultadoNOT.push(!termino1 || termino2);
// }

// let termino1p;
// let termino2p;
// let resultadoANDp = [];
// let resultadoORp = [];
// let resultadoNOTp = [];
// for (let i = 0; i < valoresParsed.length; i++) {
//     termino1p = valoresParsed[i];
//     termino2p = valoresParsed[i+1];
//     resultadoANDp.push(termino1p && termino2p);
//     resultadoORp.push(termino1p || termino2p);
//     resultadoNOTp.push(!termino1p || termino2p);
// }

// generaFilas(resultadoAND,'&&',resultadoANDp);
// generaFilas(resultadoOR,'||',resultadoORp);
// generaFilas(resultadoNOT,'! (1st)',resultadoNOTp);


// function generaFilas(arreglo, operador, arreglop) {
//     for (let i = 0; i < arreglo.length; i++) {    
//         const fila = document.createElement('tr')
//         const colNum = document.createElement('td')
//         const colTer1 = document.createElement('td')
//         const colOperador = document.createElement('td')
//         const colTer2 = document.createElement('td')
//         const colRes = document.createElement('td')
    
//         colNum.textContent = i
//         colTer1.textContent = `${String(valoresTxt[i])} (${valoresParsed[i]})`;
//         colOperador.textContent = operador;
//         colTer2.textContent = `${String(valoresTxt[i+1])} (${valoresParsed[i+1]})`;
//         colRes.textContent = `${String(arreglo[i])} (${arreglop[i]})`;
//         fila.appendChild(colNum)
//         fila.appendChild(colTer1)
//         fila.appendChild(colOperador)
//         fila.appendChild(colTer2)
//         fila.appendChild(colRes)
    
//         tabla.appendChild(fila);
//     }
//     colorCells();
// }

function colorCells() {
    let celdas = document.querySelectorAll("td");
    celdas.forEach(function (celda) {
        
        let contenido = celda.textContent.split(" ")
        contenido.forEach(palabra => {
            if (palabra === "(true)" ) {
                celda.style.backgroundColor ="#5d9a5d";
                celda.style.color ="black";
            }
            if (palabra === "(false)" ) {
                celda.style.backgroundColor ="#ce5f5b";
                celda.style.color ="black";
            }
        });
    })
    
}

