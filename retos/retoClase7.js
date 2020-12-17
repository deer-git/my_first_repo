// Reto clase 7

// Reto: escribe una funcion imprimirNombreYEdad() que imprima 
// "Hola, me llamo sacha y tengo 28 años"
// "Hola, me llamo dario y tengo 30 años"

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

var cesar = {
    nombre: 'Cesar',
    apellido: 'Chavez',
    edad: 33
}

var daenerys = {
    nombre: 'Daenerys',
    apellido: 'Quinn',
    edad: 33
}


//esta es la 1er forma de resolver----------------------
function imprimirNombreYEdad(persona){
    var nombre = persona.nombre
    var edad = persona.edad
    console.log( 'Hola, me llamo '+ nombre+' y tengo '+ edad + ' años')
}

imprimirNombreYEdad(cesar)

//esta es la 2da forma de resolverlo----------------------
function imprimirNombreYEdad2({nombre, edad}){
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad2(dario)

//esta es la 3er forma de resolverlo----------------------
function imprimirNombreYEdad3(persona)
{
  var {nombre,edad} = persona
  console.log( 'Hola, me llamo '+ nombre+' y tengo '+ edad + ' años')
}

imprimirNombreYEdad3(sacha)

//otra 4ta forma de resolver----------------------
function imprimirNombreYEdad4(persona) {
    console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años`)
    }

    imprimirNombreYEdad4(daenerys)