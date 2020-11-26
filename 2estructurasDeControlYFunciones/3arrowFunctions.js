//         Arrow Functions
// ------------(``)-------------

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: true,
    guitarrista: false,
    drone: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)

    /* (persona.ingeniero === true)   esta sentencia es lo mismo ya que por default un if compara a verdadero*/
    if(persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es Ingeniero')
    }

    if (persona.cocinero){
        console.log('cocinero')
    }
    if (persona.dj){
        console.log('dj')
    }
    if (persona.cantante){
        console.log('cantante')
    }
    if (persona.guitarrista){
        console.log('guitarrista')
    }
    if (persona.drone){
        console.log('piloto de drone')
    }
}

//para indicar que es una constante y no se pueda modificar usamos const
//var mayoriaDeEdad = 18

const MAYORIA_DE_EDAD = 18

/*    esta es una funcion anonima, ya que la variable es la que mandamos llamar
---------------1
var esMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

            Arrow function
---------------2
const esMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
}

---------------3
const esMayorDeEdad = persona => {
    return persona.edad >= MAYORIA_DE_EDAD
}

---------------4
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

            Desestructurar
---------------5
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
 */

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}


/* 
reto desarrolla la funcion esMenorDeEdad como Arrow function 
y que solo retorne la negacion de la llamada a esMayorDeEdad
*/