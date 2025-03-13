// OPERADORES

const resultado = [1,2,3].reduce((acumulador,item) =>  acumulador + item, 0)

console.log('SUMA:')
console.log(resultado+10);
console.log('resultado'+10);
console.log(true+10);
console.log(undefined+10);
console.log(10 + 'resultado');
console.log('[10]+{}'); // JIT type cohersion
console.log([10]+{}); // JIT type cohersion

console.log('RESTA:')
console.log(resultado - 10);
console.log('resultado' - 10);
console.log(true - 10);
console.log(10  -  'resultado');
console.log([10] - {}); // JIT type cohersion

console.log('PROUCTO:')
console.log(resultado * 10);
console.log('resultado' * 10);
console.log(true * 10);
console.log(10  *  'resultado');
console.log([10] * {}); // JIT type cohersion

console.log('RESIDUO:')
console.log(`4%2 = ${4%2}`);

console.log('MATH');
const potencia = Math.pow(2,2);
console.log(potencia);
console.log(2**2);

console.log('UNDEFINED TIPO');
console.log(typeof undefined); // JIT type cohersion
console.log('NAN TIPO');
console.log(typeof NaN); // JIT type cohersion


console.log( ' 0==0 ')
console.log( 0==0)

console.log( " 0=='0' ")
console.log( 0=='0')