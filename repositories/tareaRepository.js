function obtenerTareas(db) {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM tareas", [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function agregarTarea(db, { cliente_id, descripcion, estado = "pendiente" }) {
    return new Promise((resolve, reject) => {
        db.run(
            "INSERT INTO tareas (cliente_id, descripcion, estado) VALUES (?, ?, ?)",
            [cliente_id, descripcion, estado],
            function (err) {
                if (err) reject(err);
                else resolve({ id: this.lastID, cliente_id, descripcion, estado });
            }
        );
    });
}

function actualizarTarea(db, id, { cliente_id, descripcion, estado }) {
    return new Promise((resolve, reject) => {
        db.run(
            "UPDATE tareas SET cliente_id = ?, descripcion = ?, estado = ? WHERE id = ?",
            [cliente_id, descripcion, estado, id],
            function (err) {
                if (err) reject(err);
                else resolve({ id, cliente_id, descripcion, estado });
            }
        );
    });
}

function eliminarTarea(db, id) {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM tareas WHERE id = ?", [id], function (err) {
            if (err) reject(err);
            else resolve({ mensaje: "Tarea eliminada correctamente", id });
        });
    });
}

module.exports = {
    obtenerTareas,
    agregarTarea,
    actualizarTarea,
    eliminarTarea
};
