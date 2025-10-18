const express = require("express");
const router = express.Router();
const tareaService = require("../services/tareaService");

router.get("/", async (req, res) => {
    const tareas = await tareaService.obtenerTareas(req.db);
    res.json(tareas);
});

router.post("/", async (req, res) => {
    const { cliente_id, descripcion } = req.body;
    const nueva = await tareaService.agregarTarea(req.db, { cliente_id, descripcion });
    res.json(nueva);
});

router.patch("/:id/estado", async (req, res) => {
    const id = req.params.id;
    const { estado } = req.body;
    const actualizada = await tareaService.cambiarEstadoTarea(req.db, id, estado);
    res.json(actualizada);
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await tareaService.eliminarTarea(req.db, id);
    res.json({ mensaje: "Tarea eliminada correctamente" });
});

module.exports = router;
