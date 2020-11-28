//      Switch   clase15   condicional multiple
// ------------(``)-------------

var signo = prompt('¿Cual es tu signo zodiacal')
//console.log(signo)

switch (signo){
    case 'acuario':
        console.log('Texto del signo acuario')
        break
    case 'piscis':
        console.log('Texto del signo piscis')
        break
//tambien podemos colocar 2 opciones en un mismo caso
    case 'tauro':
    case 'Tauro':    
        console.log('Texto del signo tauro')
        break
    case 'geminis':
    case 'géminis':    
        console.log('Texto del signo tauro')
        break
    default:
        console.log('No es un signo zodiacal')
        break
}

/*     si se utilizan muchos if es mejor remplazarlos por switch case 
if(signo === 'acuario'){
    console.log('Texto del signo acuario')
}
if(signo === 'piscis'){
    console.log('Texto del signo piscis')
}
if(signo === 'tauro'){
    console.log('Texto del signo tauro')
}
 */