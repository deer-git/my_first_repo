// Clase 37 Manejo de fechas
//Hace cuantonsto naciste
// ------------(``)-------------

function diasEntrefechas(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)    //abs = numero absoluto si es negativo lo vuelve positivo

    return Math.floor(diferencia / unDia)
}

    const hoy = new Date()
    //new Date() por defecto arroja la fecha actual

    const nacimiento = new Date(1989, 0, 19)   //0 = enero

    //no importa el orden de las fechas gracias a abs - a +
    console.log(diasEntrefechas(hoy, nacimiento))