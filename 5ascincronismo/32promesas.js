// Clase 32 Promesas
// ------------(``)-------------

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}

/*1 modificaremos esta funcion para que nos retorne una promesa
enves de que reciba callback como parametro */

function obtenerPersonaje(id) {
    //return new Promise(function (resolve, reject)){}
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
            })
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
    .then(function (personaje){
        console.log(`El personake 1 es ${personaje.name}`)
    })
    .catch(onError)