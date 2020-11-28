//      While   clase14
// ------------(``)-------------

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad:28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

const INCREMENTO_PESO = 0.3 /* = 300 */
const DIAS_DEL_ANIO = 365

/*
 function aumentarDePeso (persona) {
    return persona.peso += 200
} 
la misma funcion pero con arrow function*/  
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sacha.peso -3
var dias = 0

while(sacha.peso > META){
    /* debugger */
    if(comeMucho()){
        aumentarDePeso(sacha)
    }
    if(realizaDeporte()){
        adelgazar(sacha)
    }
    dias += 1
}


console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} adelgazó 3kg`)