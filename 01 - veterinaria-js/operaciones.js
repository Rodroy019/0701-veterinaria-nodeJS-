const fs = require('fs');

// Función para registrar
function registrar(nombre, edad, tipo, color, enfermedad) {
    // Leer .json
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    // Crear un nuevo objeto de cita
    const nuevaCita = { nombre, edad, tipo, color, enfermedad }
    // Agregar la nueva cita
    citas.push(nuevaCita)
    // Escribir la nueva cita agregada
    fs.writeFileSync('citas.json', JSON.stringify(citas))
    console.log('Cita registrada exitosamente')
}

// Función para leer
function leer() {
    // Leer el archivo json
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    // Muestra las citas
    console.log(citas);
}

module.exports = { registrar, leer };
