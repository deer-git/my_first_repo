// Clase 36 Var Let y Const y sus diferencias
// ------------(``)-------------

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

function esMayorDeEdad(persona) {
    if(persona.edad > 18) {
        var mensaje = 'Es mayor de edad'
    } else {
        var mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}
//el uso de var hace hoisting, la variable se inicia arriba
//siempre conviene declararlas hasta arriba para saber cuales variables se ocuparan
function esMayorDeEdad1(persona) {
    var mensaje
    if(persona.edad > 18) {
        mensaje = 'Es mayor de edad'
    } else {
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}

//-------el uso con let limita el alcance solo al bloque de codigo y no a toda la funcion
function esMayorDeEdad2(persona) {
    if(persona.edad > 18) {
        let mensaje = 'Es mayor de edad'
    } else {
        let mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}
//lo correcto seria
function esMayorDeEdad3(persona) {
    let mensaje
    if(persona.edad > 18) {
        mensaje = 'Es mayor de edad'
    } else {
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}

// const se comporta como let, solo que NO podemos pisar o reescribir el valor
function esMayorDeEdad4(persona) {
    let mensaje
    const MAYORIA_DE_EDAD = 18
    if(persona.edad > MAYORIA_DE_EDAD) {
        mensaje = 'Es mayor de edad'
    } else {
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}

esMayorDeEdad3(sacha)

//usando const tambien podemos modificar (agregar-eliminar) un array pero no modificar los valores
const numeros = [1,2,3,4,5,6,7]
// numeros.push(8)


//usando un for
for (var i = 0; i < 10; i++) {
    console.log(i)
}
//usando var en un for podemos acceder a la variable
//si usaramos let no podriamos acceder a i ${i} ya que reduce el alcance al for
console.log(`Termino el for, el valor de i es ${i}`)

