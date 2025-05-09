// import calc from './calc.js'
import * as calc from './calc.js'

let screen = document.getElementById('screen')
let operando1 = [];
let operando2 = [];
let resultado = null;
let valoperador = null;
let operandoactual = 1;

/**
 * Obtiene todos los botones de numero y escucha al presionar alguno.
 */
const operandos = document.querySelectorAll('.numero')
operandos.forEach((operando) =>{
    operando.addEventListener("click", (event) =>{
        
        const actual = operandoactual === 2 ? operando2 : operando1;

        if(actual.length < 8){
            actual.push(event.target.value);
            screen.textContent = parseFloat(actual.join(''));
        }
    })
})

/**
 * Obtiene todos los botones de operador y escucha al presionar alguno
 */
const operadores = document.querySelectorAll('.operador')
operadores.forEach((operador) =>{
    operador.addEventListener("click", (event) =>{
        if (operando1.length > 0 && !valoperador) {
            operandoactual = 2;
            console.log('operador presionado')
            valoperador = event.target.value;
            screen.textContent = null;
        }
    })
})

/**
 * Escucha boton de punto y agrega decimal
 */
const dot = document.getElementById('btnDot')
dot.addEventListener('click', () =>{
    if (operandoactual === 1) {
        operando1.length === 0 ? operando1.push('0.') : operando1.push('.');
        screen.textContent = parseFloat(operando1.join(''));
    }
    if (operandoactual === 2) {
        operando2.length === 0 ? operando2.push('0.') : operando2.push('.');
        screen.textContent = parseFloat(operando2.join(''));
    }
})

/**
 * Escucha el boton delete y elimina digitos
 */
const del = document.getElementById('btnDel')
del.addEventListener('click', () =>{
    let act = operandoactual === 1 ? operando1 : operando2;
    if (act.length>0) {        
        act.pop();
        screen.textContent = parseFloat(act.join(''));
    }
})

/**
 * Obtiene boton de resultado y escucha su evento click
 * Convierte valores a float antes de enviarlos operar
 */
const calcular = document.getElementById('btnResultado');
calcular.addEventListener("click", () => {
    if (operando1.length>0 && valoperador && operando2.length>0) {

        let valor1 = parseFloat(operando1.join(''));
        let valor2 = parseFloat(operando2.join(''));

        if (!!resultado) {
            operar(valoperador, resultado, valor2);
            return            
        }else{            
            operar(valoperador, valor1, valor2)
        }
    }
})

/**
 * Realiza operacion matemàtica dados dos valores
 * @param {string} valoperador 
 * @param {Number} val1 
 * @param {Number} val2 
 */
const operar = (valoperador, val1, val2) =>{
    let res;
    switch (valoperador) {
        case '+':
            res = calc.suma(val1,val2);
            break;
        case '-':
            res = calc.resta(val1,val2);
            break;
        case '*':
            res = calc.producto(val1,val2);
            break;
        case '/':
            res = calc.division(val1,val2);
            break;
        case '%':
            res = calc.resultado(val1,val2);
            break;
        default:
            res = 'Operador no válido';
            break;
    }

    resultado = res.toFixed(3);
    screen.textContent = resultado;
    console.log('Resultado:', resultado);
}

/**
 * Limpia pantalla y vacìa todas las variables
*/
const clear =document.getElementById('btnClr')
clear.addEventListener('click', () =>{
    operando1 = [];
    operando2 = [];
    resultado = null;
    valoperador = null;
    screen.textContent = null;
    operandoactual = 1;
})

