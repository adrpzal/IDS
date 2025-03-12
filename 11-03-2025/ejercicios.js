// PALINDROMO
function ejercicio1() {
    let palabra = window.prompt("ingresa palabra", "sosos");   
    console.log(`palabra: ${palabra}`);

    for (let i = 0; i < palabra.length/2; i++) {
        console.log(`letra i${i}: ${palabra[i]} `);

        for (let j = palabra.length -1; j > -1; j--) {
            console.log(`letra j${j}: ${palabra[j]}`);

            if (palabra[i]!==palabra[j]) {
                console.log(` palabra i ${palabra[i]} palabra j ${palabra[j]}`)
                console.log("no es palindromo")
                return;
            }
        }       
    }   
}

// FUNCION PARA CALCULAR EL FACTORIAL DE UN NUMERO N* N-1
function ejercicio2() {
    let factorial = Number(window.prompt("numero a calcular factorial", 5));
    for (let i = factorial - 1; i>0; i--) {
        factorial = factorial * i;       
    }

    console.log(`El factorial es: ${factorial}`);
    
}


// FUNCION PARA PINTA SERIE DE FIBONACCI HASTA DETERMINADO NUMERO
function ejercicio3() {
    let numero = window.prompt("ingresa numero par Fibonacci: ", 5);
  
}


// ORDENAR UN ARREGLO SIN SORT
function ejercicio4() {
    let arreglo = window.prompt("Ingresa arreglo de numeros");
    let nvoArreglo = arreglo.split("").map(Number);
    let comodin;
    console.log(`El arreglo ingresado es : ${nvoArreglo}`)
    for (let i = 0; i < nvoArreglo.length; i++) {
        while (nvoArreglo[i] < nvoArreglo[i+1]) {
            comodin = nvoArreglo[i];
            nvoArreglo[i] = nvoArreglo[i+1];
            nvoArreglo[i+1] = comodin;
        }
        
    }
    console.log(`El nuevo arreglo es: ${nvoArreglo}`);

}


// CONTAR NUMERO DE PALABRAS EN UNA CADENA DE TEXTO
function ejercicio5() {
    let cadena = window.prompt("Ingresa cadena");
    let separadas = cadena.split(" ");
    console.log(`El numero de palabras es : ${separadas.length}`);

}


// ENCONTRAR NUMERO QUE FALTA EN UNA SECUENCIA DE NUMEROS
function ejercicio6() {
    let secuencia = window.prompt("Ingresa numeros, separados por comas");
    let secuenciaNumber = secuencia.split(",").map(Number)
    let faltante = null;

    console.log(secuenciaNumber)
    for (let i = 0; i < secuenciaNumber.length; i++) {
       if (secuenciaNumber[i]+1 !== secuenciaNumber[i+1]) {
        faltante = secuenciaNumber[i]+1;
        console.log(`El numero faltante es ${faltante}`)
        return
       }
    }
}


// ENCONTRAR LA SUBCADENA MAS LARGA DENTRO DE UN STRING
function ejercicio7() {
    let cadenalarga = window.prompt("Ingresa cadena");
    let subcadenas = cadenalarga.split(" ");
    let largos = [];

    subcadenas.forEach(function(cadena) {
        console.log(`El largo de la cadena es ${cadena.length}`)
        let largo = cadena.length
        largos.push(largo);
    })

    console.log(`Los largos son ${largos}`)  
    let mayore = Math.max(...largos);
    console.log(`el mayor es ${mayore}`)
}



// DADO UNOS PARENTESIS RECIBIDOS, DETERMINAR EN QUE POSICION VALIDARPARENTESIS FALTA EL CARACTER
function ejercicio8() {
    
}

// SUMAR NUMEROS ENTRE SI 123 1+ 2+3
function ejercicio9() {
    
}


// ENCONTRAR EL VALOR QUE SE REPITE UNA SOLA VEZ EN UN ARREGLO
function ejercicio10() {
    
}

