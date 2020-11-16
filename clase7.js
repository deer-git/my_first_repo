// desestructuración de objetos

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

function imprimirNombreEnMayusculas(persona){
  //var nombre = persona.nombre     *esta declaracion y la de abajo son equivalentes
    var { nombre } = persona                
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)

// Reto: escribe una funcion imprimirNombreYEdad() que imprima 
// "Hola, me llamo sacha y tengo 28 años"
// "Hola, me llamo dario y tengo 30 años"