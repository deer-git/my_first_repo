// Clase 17    Arrays
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

//para poder recorrer el array

for(var i=0; i < personas.length; i++){
    console.log(personas[i])
}

for(var i=0; i < personas.length; i++){
    console.log(`${personas[i].altura}`)
}

for(var i=0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}