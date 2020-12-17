// Clase 40 Closures
// ------------(``)-------------

//recuerdan el estado de las cosas cuando fue incocada

function crearSaludo(finalDeFrase) {      //funcion creadore de otras funciones
    return function(nombre){              //retorna funcion anonima
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wey')
const saludoColombiano = crearSaludo('llave')

saludoArgentino('sacha')
saludoMexicano('sacha')
saludoColombiano('sacha')