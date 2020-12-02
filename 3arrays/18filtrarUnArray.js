// Clase 18    Filtrar un Array
// ------------(``)-------------

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

// si quisieramos agrupar estas personas dentro de una misma coleccion... usamos un array
var personas = [sacha, alan, martin, dario, vicky, paula]


/* ---estas funciones son lo mismo con diferente estructura */
const esAlta = (persona) => {
    return persona.altura > 1.80
}

const esAlta1 = persona => persona.altura > 1.80

const esAlta2 = ({ altura }) => altura > 1.80  /* aqui solo desglosamos la condicion y solo necesitamos saber la altura */
/* ----------------------------------- */

var personasAltas = personas.filter(esAlta)  /* esAlta = condicion */
var personasAltas1 = personas.filter(esAlta1)
var personasAltas2 = personas.filter(esAlta2)

/* enves de tener la condicion por separado esta hace el filtrado dentro de la misma

var personasAltas = personas.filter(function (persona){
    return persona.altura > 1.8
})

 */

console.log(personasAltas)
console.log(personasAltas1)
console.log(personasAltas2)

/* reto clase-18 filtrar personas bajas o NO son altas */