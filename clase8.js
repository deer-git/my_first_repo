// Parámetros como referencia o como valor

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

//funcion pasandole como parametro un objeto que modifica el objeto global
//probar en consola chrome cumpleanios(sacha) y sacha
function cumpleanios(persona){
  //persona.edad = persona.edad + 1
    persona.edad += 1
}

//si solamente pasaramos la edad el valor de edad sacha no se vera afectado
//en consola cumpleanios1(sacha.edad) y sacha
function cumpleanios1(edad){
      edad += 1
  }

/* 
esata funcion retorna un objeto nuevo copiando todo lo que tenia el objeto anterior
y modificando solo lo que especifiquemos como la edad
usando {}referente a un objeto y ...persona.   Desglosando a la nueva persona dentro del objeto
nos devolvera una persona mas vieja a la anterior pero el valor original no se modificara
en consola cumpleanios2(sacha) y sacha 
*/
function cumpleanios2(persona){
    return{
        ...persona,
        edad: persona.edad +1
    }
}
