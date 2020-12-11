// Clase 30 Manejando el orden y el ascincronismo de multiples callbacks
// ------------(``)-------------

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}

/*#2 esta funcion la recortamos y la ejecutamos como anonima en $.get()

const onPeopleResponse = function (persona){
    console.log(`Hola, yo soy ${persona.name}`)
} */

/*#1 haremos que esta funcion acepte un segundo parametro callback o cb o fn  */
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    
    /* #3 */
    $.get(url, opts, function (persona){
        console.log(`Hola, yo soy ${persona.name}`)

        /* #4 */
        if (callback) {
            callback()
        }
    })
}

/*#5 ahora especificamos el parametro callback y llamamos al personaje 2 y asi sucesivamenete */
/* este es un callbackHell    codigo espagueti*/
obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5, function(){
                    obtenerPersonaje(6)
                })
            })
        })
    })
})
