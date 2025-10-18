const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const clienteController = require("./controllers/clienteController");
const tareaController = require("./controllers/tareaController");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("public"))

const dbPath = path.join(__dirname, "database", "database.db");
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS clientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            documento TEXT NOT NULL,
            telefono TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS tareas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cliente_id INTEGER,
            descripcion TEXT NOT NULL,
            estado TEXT DEFAULT 'pendiente',
            FOREIGN KEY (cliente_id) REFERENCES clientes(id)
        )
    `);
});

app.use((req, res, next) => {
    req.db = db;
    next();
});

app.get("/", (req, res) => {
    res.send("✅ Servidor Express funcionando correctamente");
});

app.use("/clientes", clienteController);
app.use("/tareas", tareaController);

const PORT = 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
