// Clase 22 Modificando un prototipo 
// ------------(``)-------------

//eta funcion trabaja como un constructor
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

//dentro del prototipo de persona habra una funcion spara saludar
Persona.prototype.saludar = function (){
    console.log(`Hi, my name is ${this.nombre} ${this.apellido}`)
}

//Si esta funcion la reescribimos a un arrow function nos arroja un error con arturo
//arturo.soyAlto()  =  false?
Persona.prototype.soyAlto = () =>this.altura > 1.8

var sacha = new Persona('Sacha', 'Lifszyc', 1.68)
var erika = new Persona('Erika', 'Luna', 1.70)
var arturo = new Persona('Arturo', 'Martinez', 1.85)

//es recomendable colocar los prototipos al inicio, antes de ser lllamadas
//de lo contrario puede arrojar un error