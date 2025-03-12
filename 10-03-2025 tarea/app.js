function ej1() {console.log(`Hola mundo`)}

function ej2() {
    let firstVal = Number(window.prompt("Numero 1", 0));
    let secondVal = Number(window.prompt("Numero 2", 0));

    console.log(`La suma de ${firstVal} + ${secondVal} es ${firstVal+secondVal}`);
}

function ej3() {
    let nombre = window.prompt("Dame tu nombre:", "Adrian");
    console.log(`Tu nombre es: ${nombre}`);
}

function ej4() {
    let numero = Number(window.prompt("Numero 1", 0));
    let espar = numero % 2 === 0 ? "es par" : "no es par";
    console.log(`El nùmero ${numero} ${espar}`);
}

function ej5() {
    console.log(`Pintando los primeros 10 nùmeros`)
    for (let i = 1; i < 11; i++) {console.log(i)}
}

function ej6() {
    let suma = 0;
    for (let i = 1; i < 101; i++) {suma += i}
    console.log(`La suma de los primeros 100 nùmeros es ${suma}`);
}

function ej7() {
    let numero = Number(window.prompt("Dame nùmero: ", 0))
    console.log(`Generando tabla del ${numero}`);
    for (let i = 1; i < 11; i++) {    
        console.log(`${numero} X ${i} = ${numero*i}`);
    }
}

function ej8() {
    let cadena = window.prompt("Dame cadena: ", "cadena");
    let nuevaCadena = [];
    let contando = true;
    let longCadena = 0;

    while (contando) {
        if (cadena[longCadena] === undefined) {contando = false}        
        else{longCadena++}
    }
    console.log(`La longitud de la cadena es ${longCadena}`)
    
    for (let i = longCadena-1; i > -1; i--) {nuevaCadena += cadena[i]}

    console.log(`La cadena invertida de ${cadena}, es ${nuevaCadena}`);
}

function ej9() {
    let conta = 0;
    let conte = 0;
    let conti = 0;
    let conto = 0;
    let contu = 0;

    let cadena = window. prompt("Dame cadena: ", "cadena");

    let contando = true;
    let longCadena = 0;

    while (contando) {
        if (cadena[longCadena] === undefined) {contando = false}        
        else{longCadena++}
    }
    console.log(`La longitud de la cadena es ${longCadena}`)
    
    for (let i = 0; i < longCadena; i++) {
        if (cadena[i]==="a") {conta++}
        if (cadena[i]==="e") {conte++}
        if (cadena[i]==="i") {conti++}
        if (cadena[i]==="o") {conto++}
        if (cadena[i]==="u") {contu++}
    }
    console.log(`La vocal a se encontró ${conta} veces`);
    console.log(`La vocal e se encontró ${conte} veces`);
    console.log(`La vocal i se encontró ${conti} veces`);
    console.log(`La vocal o se encontró ${conto} veces`);
    console.log(`La vocal u se encontró ${contu} veces`);
}

function ej10() {
    let numero = Number(window.prompt("Ingresa numero a evaluar:", 0));
    let esprimo = true;

    if ((numero < 2) || (numero > 2 && numero % 2 === 0) ) {esprimo = false}
    if (numero === 2 || numero === 3) {esprimo = true}

    console.log(`El numero ${numero} ${esprimo ? "sì": "no"} es primo`);
}