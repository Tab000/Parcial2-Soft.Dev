function obtenerClientes(db) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM clientes", [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function agregarCliente(db, { nombre, documento, telefono }) {
    return new Promise((resolve, reject) => {
        db.run(
            "INSERT INTO clientes (nombre, documento, telefono) VALUES (?, ?, ?)",
            [nombre, documento, telefono],
            function (err) {
                if (err) reject(err);
                else resolve({ id: this.lastID, nombre, documento, telefono });
            }
        );
    });
}

function actualizarCliente(db, id, { nombre, documento, telefono }) {
    return new Promise((resolve, reject) => {
        db.run(
            "UPDATE clientes SET nombre = ?, documento = ?, telefono = ? WHERE id = ?",
            [nombre, documento, telefono, id],
            function (err) {
                if (err) reject(err);
                else resolve({ id, nombre, documento, telefono });
            }
        );
    });
}

function eliminarCliente(db, id) {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM clientes WHERE id = ?", [id], function (err) {
            if (err) reject(err);
            else resolve({ mensaje: "Cliente eliminado correctamente", id });
        });
    });
}

module.exports = {
    obtenerClientes,
    agregarCliente,
    actualizarCliente,
    eliminarCliente
};

