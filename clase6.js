// Objetos

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 30
}

/* 
function imprimirNombreEnMayusculas(nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}
imprimirNombreEnMayusculas(sacha.apellido)
 */

function imprimirNombreEnMayusculas(persona){
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}
//si no queremos agregar una variable en la función podemos usar
function imprimirApellidoEnMayusculas(persona){
    console.log(persona.apellido.toUpperCase())
}
//tambien podemos declarar el objeto como parametro colocando {}
function imprimirNombreEnMinusculas({ nombre }){
    console.log(nombre.toLowerCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirApellidoEnMayusculas(dario)
imprimirNombreEnMinusculas(dario)
//si no queremos hacer referencia a una variable (sacha o dario)
imprimirNombreEnMinusculas({ nombre: 'Pepito' })

//si lo inbocamos sin parametros maracara error tambien si llamamos un parametro que no definimos en nuestra funcion
//imprimirNombreEnMinusculas({ apellido: 'Gomez'})
