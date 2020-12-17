//         retoClase12
// ------------(``)-------------

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = (persona) => esMayorDeEdad(persona)
const esMenorDeEdad1 = ({ edad }) => !esMayorDeEdad({edad})

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}

/* 
reto desarrolla la funcion esMenorDeEdad como Arrow function 
y que solo retorne la negacion de la llamada a esMayorDeEdad
*/

//const esMenorDeEdad = (persona) => !esMayorDeEdad(persona)
//const esMenorDeEdad1 = ({ edad }) => !esMayorDeEdad({edad})
const permitirAcceso1 = ({ edad }) => !esMayorDeEdad({ edad }) ? 'Acceso denegado' : 'Adelante';
