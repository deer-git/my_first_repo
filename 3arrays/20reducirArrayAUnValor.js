// Clase 20  reduce()   Reducir un array a un valor 
// ------------(``)-------------
//sacar la cuenta de cuantos libros hay

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

const esAlta = ({ altura }) => altura > 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

//---------para saber cuantos libros hay-------------------
//podriamos hacerlo con un ciclo for o usando el metodo reduce()

var acum = 0

for(var i = 0; i < personas.length; i++){
    acum = acum + personas[i].cantidadDeLibros
}

//y usando reduce()

const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros
}

//la funcion de arriba la reescribimos prolijamente a arrow function
const reducer1 = (acum, persona) => acum + persona.cantidadDeLibros

const reducer2 = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros


var totalDeLibros = personas.reduce(reducer2, 0)  //necesitamos una funcion que la llamaremos reducer y un acumulador igualado a 0

console.log(`Usando For En total todos tienen ${acum} libros`)
console.log(`En total todos tienen ${totalDeLibros} libros`)