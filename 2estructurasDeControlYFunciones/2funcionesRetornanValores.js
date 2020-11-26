// Funciones qe retornan valores
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

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}