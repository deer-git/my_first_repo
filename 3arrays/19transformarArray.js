// Clase 19  map() transformar un array 
// ------------(``)-------------

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = ({ altura }) => altura > 1.80

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

/* ----------------- */

//esta funcion retorna un nuevo objeto modificando el original
const pasarAlturaACms = persona => {
  //persona.altura *= 100
    persona.altura = persona.altura * 100
    return persona
}

//este array retorna un nuevo objeto/array sin tocar el original
const pasarAlturaACms1 = persona => {
      return{
          ...persona,
          altura: persona.altura * 100
      }
  }

//para transcribir prolijamente la funcion de arriba a arrow function
const pasarAlturaACms2 = persona => ({
        ...persona,
        altura: persona.altura * 100
})


var personasCms = personas.map(pasarAlturaACms2) //map() regresa un array nuevo modificando el original

console.log(personasCms)
