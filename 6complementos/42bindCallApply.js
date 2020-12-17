// Clase 42Cambiando de contexto al llamar a una funcion
// ------------(``)-------------
//al mandar llamar una funcion ascincrona debemos tener en cuenta quien es this


const sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

const yesika = {
    nombre: 'Yesika',
    apellido: 'Luna',
    edad: 28
}

function saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`)
}

function saludar1(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

//const saludarASacha = saludar.bind(sacha)
//const saludarAYesika = saludar.bind(yesika)

setTimeout(saludar.bind(sacha), 1000)
//primer parametro es quien es this, segundo saludo modificado
setTimeout(saludar1.bind(sacha, 'Hola che'), 1000)

saludar1.call(sacha, 'Hola wey')
//primer parametro es quien es this.
//segundo parametro es un array y contiene los parametros de la funcion
saludar1.apply(sacha, ['Hola llave'])