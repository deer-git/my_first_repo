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

imprimirProfesiones(sacha)

/* //retoClase10 condicionales
function imprimirSiEsMayorDeEdad(persona){
    // Sacha es mayor de edad
    //Sacha es menor de edad
} */