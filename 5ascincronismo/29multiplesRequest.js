// Clase 29 haciendo multiples request
// ------------(``)-------------

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}

const onPeopleResponse = function (persona){
    console.log(`Hola, yo soy ${persona.name}`)
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

/* for(var i = 0; i < 15; i++){
    obtenerPersonaje(i)
} */

/* ahora llamaremos una funcion ascincrona, en orden, pero
el asincronismo nos los mandara dependiendo el servidor */
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)

