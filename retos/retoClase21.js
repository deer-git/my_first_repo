// Reto clase21 Reto: agrega el atributo altura y la función soyAlto.
// ------------(``)-------------

//eta funcion trabaja como un constructor
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.estatura = function (){
    this.altura > 1.80 ? 
    console.log(`Hola, soy ${this.nombre} mido ${this.altura}, soy una persona alta`):
    console.log(`Hola, soy ${this.nombre} mido ${this.altura}, soy una persona baja`)
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.68)
var erika = new Persona('Erika', 'Luna', 1.70)
var arturo = new Persona('Arturo', 'Martinez', 1.85)

//console.log(`${(this.height>1.8)?`I'm tall`:`I'm not tall`}`)

sacha.estatura()
erika.estatura()
arturo.estatura()
