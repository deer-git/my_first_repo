// Clase 24 La verdad oculta de las clases en JS 
// ------------(``)-------------

//#4              desarrollador, persona
function heredaDe(prototipoHijo,prototipoPadre){
    var fn = function () {}                               //fn o noop no hace nada
        fn.prototype = prototipoPadre.prototype
        prototipoHijo.prototype = new fn
        prototipoHijo.prototype.constructor = prototipoHijo   //y se le asigna funcion constructora a clase hija de lo contrario mandaria llamar el constructor del padre
    }

//eta funcion trabaja como un constructor
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function (){
    console.log(`Hi, my name is ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function (){
    return this.altura > 1.8
}

//#1
//para que Desarrollador pueda llamar la funcion soyAlto agregar altura
function Desarrollador (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}
//#2
heredaDe(Desarrollador, Persona)
//#3
Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

//#2 esta parte se coloca arriba para que no se sobreescriba el saludar

/* 
var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.85)
 */
