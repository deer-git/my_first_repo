// Clase 39 Memorizacion ahorrando computo
// ------------(``)-------------

/* 
factorial de 6
    /6 = 6 * 5 * 4 * 3 * 2 * 1 = 720

factorial de 12  y ocupamos el valor de /6 par no volver a hacer toda la operacion
    /12 = 12 * 11 * 10 * 9 *8 * 7 * /6  
*/

function factorial(n) {
    if (!this.cache) {      //condicion para crear la cache si no existe
        this.cache = {}
    }

    //debugger
    if (this.cache[n]) {        // si ya existe el calculo solo lo retornamos
        return this.cache[n]
    }

    if (n === 1) {          //condicion base llega a 1
        return 1
    }

    this.cache[n] = n * factorial(n - 1)        //la primera vez que calculemos un factorial aqui se guarda
    //debugger
    return this.cache[n]
    //y este valor lo guardamos en la cache enves de retornarlo
    //return n * factorial(n - 1)
    
}
