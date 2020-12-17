// Clase 41 Estructuras de datos inmutables
// ------------(``)-------------

const sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

// const cumpleanios = persona => persona.edad++

const cumpeaniosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})

// sacha = 28
// cumpleaniosInmutable('sacha') = 29
//nos devolvera un nuevo objeto sin modificar el original
