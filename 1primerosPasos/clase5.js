// Alcance de las funciones

var nombre = 'sacha'

/*         
function imprimirNombreEnMayusculas(){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}
imprimirNombreEnMayusculas()
*/
//para evitar la modificación de la variable global
//en la función usaremos una variable local

function imprimirNombreEnMayusculas(n){
    n = n.toUpperCase()
    console.log(n)
}

imprimirNombreEnMayusculas(nombre)

