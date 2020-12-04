// Clase 21 Como funcionan las clases en JS  Prototipos 
// ------------(``)-------------

//eta funcion trabaja como un constructor
function Persona(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
    //return this      este return esta implicito que retorna el objeto
}

//dentro del prototipo de persona habra una funcion spara saludar
Persona.prototype.saludar = function (){
    console.log(`Hi, my name is ${this.nombre} ${this.apellido}`)
}

var sacha = new Persona('Sacha', 'Lifszyc')
var erika = new Persona('Erika', 'Luna')
var arturo = new Persona('Arturo', 'Martinez')

sacha.saludar()

//Reto: agrega el atributo altura y la función soyAlto.