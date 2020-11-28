//      Do-While   clase15
// ------------(``)-------------

var contador = 0

var cuantas = 'veces'

const llueve = () => Math.random() < 0.25

do {
    contador++
}while(!llueve())

console.log(`Fui a ver si llovia ${contador} ${cuantas}`)

//reto clase15 soluciona el bug de veces y vez