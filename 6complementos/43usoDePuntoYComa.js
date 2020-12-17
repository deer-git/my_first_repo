// Clase 43 Cuando hace falta poner el punto y coma al final de la linea?
// ------------(``)-------------

// esta declaracion nos dara error si no escribimo ; antes de declarar el array
/* console.log('Hola mi nombre es sacha')
[1, 2, 3].forEach(n => console.log(n * 2)) */

console.log('Hola mi nombre es sacha');
[1, 2, 3].forEach(n => console.log(n * 2))

console.log('Hola mi nombre es sacha')
;[1, 2, 3].forEach(n => console.log(n * 2))

const nombre = 'Sacha'
console.log('Hola mi nombr es Sacha');
`${nombre} es un desarrollador`

console.log('Hola mi nombr es Sacha')
;`${nombre} es un desarrollador`


//si la declaracion del return no inicia minimo { en la misma linea marcara un error
/* function calcularDoble2(numero) {
    return 
    { 
        original: numero, doble: numero * 2
    }
} */

function calcularDoble(numero) {
    return { original: numero, doble: numero * 2}
}

function calcularDoble1(numero) {
    return { 
        original: numero, doble: numero * 2
    }
}