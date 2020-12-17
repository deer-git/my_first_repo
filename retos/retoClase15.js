//      reto soluciona el bug veces y vez   clase15
// ------------(``)-------------

var contador = 0

var cuantas = 'veces'

//funcion para saber si llueve el 25% de las veces
const llueve = () => Math.random() < 0.25

do {
    contador++
    if(contador === 1){
        cuantas = 'vez'
    }else{
        cuantas = 'veces'
    }
}while(!llueve())  //mientras que NO llueva, el codigo se repetira
//si llueve la ejecucion se detendra

console.log(`Fui a ver si llovia ${contador} ${cuantas}`)

//esta es otra forma de resolverlo
/* 
var frecuencia;
if(contador === 1)
  frecuencia = "vez";
else 
  frecuencia = "veces";
*/
var frecuencia = contador===1 ? "vez":"veces";
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);