// Clase 34 Multiples Promesas En Paralelo
// ------------(``)-------------

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}

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

var ids = [1,2,3,4,5,6,7]
/* var promesas = ids.map(function (id){
    return obtenerPersonaje(id)
}) */
var promesas = ids.map( id => obtenerPersonaje(id))
//en consola probamos:  promesas  = array lleno de 7 promesas

//de esta forma podemos usar request en paralelo y prolijamente
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)


/* 
obtenerPersonaje(1)
    //.then(function (personaje){
    .then( personaje => {
        console.log(`El personaje 1 es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then( personaje => {
        console.log(`El personaje 2 es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then( personaje => {
        console.log(`El personaje 3 es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then( personaje => {
        console.log(`El personaje 4 es ${personaje.name}`)
        return obtenerPersonaje(5)
    })
    .then( personaje => {
        console.log(`El personaje 5 es ${personaje.name}`)
        return obtenerPersonaje(6)
    })
    .then( personaje => {
        console.log(`El personaje 6 es ${personaje.name}`)
        return obtenerPersonaje(7)
    })
    .then( personaje => {
        console.log(`El personaje 7 es ${personaje.name}`)
    })
    .catch(onError)
*/