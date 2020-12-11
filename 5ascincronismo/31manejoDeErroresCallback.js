// Clase 31 Manejo de errores con callbacks por falta de conexion a internrt...
// ------------(``)-------------

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}

function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    /* #1 ahora llamaremos al callback desde parametro y que realize la funcion del hell > */
    /* #3 aparte del metodo get podemos encadenar un metodo fail() para deteccion de errores de conexion*/
    
    /* $.get(url, opts, callback).fail(function (){
        console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
    })
    } */

/*#5 la funcion de arriba pero como arrowfunction */
$
.get(url, opts, callback)
.fail( () => {
    console.log(`Sucedio un error. No se pudo obtener el personaje ${id}`)
})
}

/* #4 para probarlo en consola -> Netwirk -> desable cacje 
y actualizar la pagina, cuando este cargando colocar network offline(sin conexion)*/

/* #2 llamamos al personaje 1 y despues al callback que utiliza jQuery*/
obtenerPersonaje(1, function (personaje){
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function (personaje){
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function (personaje){
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function (personaje){
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function (personaje){
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function (personaje){
                        console.log(`Hola, yo soy ${personaje.name}`)
                })
            })
        })
    })
})
})