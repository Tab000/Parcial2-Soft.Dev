const clienteRepository = require("../repositories/clienteRepository");

async function obtenerClientes(db) {
    return clienteRepository.obtenerClientes(db);
}

async function agregarCliente(db, cliente) {
    return clienteRepository.agregarCliente(db, cliente);
}

async function actualizarCliente(db, id, cliente) {
    return clienteRepository.actualizarCliente(db, id, cliente);
}

async function eliminarCliente(db, id) {
    return clienteRepository.eliminarCliente(db, id);
}

module.exports = { 
    obtenerClientes, 
    agregarCliente, 
    actualizarCliente, 
    eliminarCliente 
};
