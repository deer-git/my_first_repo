//      For   clase13
// ------------(``)-------------

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad:28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

const INCREMENTO_PESO = 0.2 /* = 200 */
const DIAS_DEL_ANIO = 365

/*
 function aumentarDePeso (persona) {
    return persona.peso += 200
} 
la misma funcion pero con arrow function*/  
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for(var i = 1; i <= DIAS_DEL_ANIO; i++ ){
    var random = Math.random()  /* se genera numero random entre 0 y 1 ej 0.2223*/

    if(random < 0.25) {
        aumentarDePeso(sacha)
    }else if (random < 0.5) {
        //cod adelgaza 0.5 equivale al 50%
        adelgazar(sacha)
    }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`)