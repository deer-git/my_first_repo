// Clase 38 Funciones recursivas
// ------------(``)-------------

 /* 
    13 /_4___

    13 - 4 = 9   1
    9 - 4 = 5    1
    5 - 4 = 1    1
    1 - 4 = -3   0  ->  esta es nuestra condicion base
                        que detiene la recursividad de la funcion
 */

 function divisionEntera(dividendo, divisor) {
     if (dividendo < divisor) {        // condicion de nuestra condicion base
         return 0
     }

     return 1 + divisionEntera(dividendo - divisor, divisor)
 }

 console.log(divisionEntera(30, 3))
 console.log(divisionEntera(13, 4))