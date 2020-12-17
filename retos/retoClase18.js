/* reto clase-18 filtrar personas bajas o NO son altas */

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = ({ altura }) => altura > 1.80
const esBaja = ({ altura }) => !esAlta({ altura })

//declarar un array
var personas = [sacha, alan, martin, dario, vicky, paula]


var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)

//-------------------
const ESTATURA_MINIMA = 1.7
const ESTATURA_MAXIMA = 1.8

const esBaja1 = ({ altura }) => altura < ESTATURA_MINIMA
const esPromedio = ({ altura }) => altura > ESTATURA_MINIMA && altura < ESTATURA_MAXIMA
const esAlta1 = ({ altura }) => altura > ESTATURA_MAXIMA

var personasBajas1 = personas.filter(esBaja1)
var personasPromedio = personas.filter(esPromedio)
var personasAltas1 = personas.filter(esAlta1)

console.log(personasBajas1)
console.log(personasPromedio)
console.log(personasAltas1)