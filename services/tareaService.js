const tareaRepository = require("../repositories/tareaRepository");

async function obtenerTareas(db) {
    return tareaRepository.obtenerTareas(db);
}

async function agregarTarea(db, tarea) {
    return tareaRepository.agregarTarea(db, tarea);
}

async function actualizarTarea(db, id, descripcion) {
    return tareaRepository.actualizarTarea(db, id, descripcion);
}

async function cambiarEstadoTarea(db, id, estado) {
    return tareaRepository.cambiarEstadoTarea(db, id, estado);
}

async function eliminarTarea(db, id) {
    return tareaRepository.eliminarTarea(db, id);
}

module.exports = { 
    obtenerTareas, 
    agregarTarea, 
    actualizarTarea, 
    cambiarEstadoTarea, 
    eliminarTarea 
};
