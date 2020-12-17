//reto 1 de 2estructurasDeContr... condicionales
/*
Desarrolla un codigo para esta funcion y haz que imprima
    Sacha es mayor de edad
    Sacha es menor de edad
*/ 

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}
var korina = {
    nombre: 'korina',
    apellido: 'Sanchez',
    edad: 17
}

function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad.`)
    }else{
        console.log(persona.nombre + ' es menor de edad.')
    }
}

function imprimirSiEsMayorDeEdad1({ nombre,edad}){
    var mayoriaDeEdad = 18
    if(edad >= mayoriaDeEdad){
        console.log(`${nombre} es mayor de edad al tener ${edad} años`)
    }else{
        console.log(nombre + ' es menor de edad al tener ' + edad + ' años')
    }
}

function imprimirSiEsMayorDeEdad2(persona){
    var mayoriaDeEdad = 18
    var {nombre, edad} = persona
    if(edad >= mayoriaDeEdad){
        console.log(`${nombre} es mayor de edad. Y tiene ${edad} años.`)
    }else{
        console.log(nombre + ' es menor de edad. Y tiene ' + edad + ' años')
    }
}

/*   que es? ${edad >= 18 ? 'mayor':'menor'}*/
function mayorDeEdad({nombre, edad}) {
    console.log(`${nombre} es ${edad >= 18 ? 'mayor':'menor'} de edad `);
    }

imprimirSiEsMayorDeEdad(sacha)
imprimirSiEsMayorDeEdad(korina)
imprimirSiEsMayorDeEdad1(sacha)
imprimirSiEsMayorDeEdad1(korina)
imprimirSiEsMayorDeEdad2(sacha)
imprimirSiEsMayorDeEdad2(korina)
mayorDeEdad(sacha)
mayorDeEdad(korina)
  