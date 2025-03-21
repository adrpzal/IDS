// export default { suma,resta, producto, division, residuo, potencia}

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const producto = (a,b) => a * b;
const division = (a,b) => a / b;
const residuo = (a,b) => a % b;
const potencia = (a,b) => Math.pow(a,b);

export function operaciones(operador,valor1,valor2) {
    const opers = new Map();
    opers.set("suma", suma);
    opers.set("resta", resta);
    opers.set("producto", producto);
    opers.set("division", division);
    opers.set("residuo", residuo);
    opers.set("potencia", potencia);

    const opera = opers.get(operador)
    return opera(valor1,valor2);
}

// console.log(operaciones("suma", 2, 8))
