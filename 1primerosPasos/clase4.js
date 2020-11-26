// Funciones

var nombre = 'Sacha', edad = 28

function imprimirEdad(n,e){      
    console.log(`${n} tien ${e} años`)
}
imprimirEdad(nombre, edad)
imprimirEdad('Brenda', 30)
//al cambiar el orden de los parametros, tambien cambia el resultado
//js tratara de correr el programa, aun sin parametros
imprimirEdad(55, 'Said')
imprimirEdad()