const express = require("express");
const router = express.Router();
const clienteService = require("../services/clienteService");

router.get("/", async (req, res) => {
    const clientes = await clienteService.obtenerClientes(req.db);
    res.json(clientes);
});

router.post("/", async (req, res) => {
    const { nombre, documento, telefono } = req.body;
    const nuevo = await clienteService.agregarCliente(req.db, { nombre, documento, telefono });
    res.json(nuevo);
});

router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const { nombre, documento, telefono } = req.body;
    const actualizado = await clienteService.actualizarCliente(req.db, id, { nombre, documento, telefono });
    res.json(actualizado);
});

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await clienteService.eliminarCliente(req.db, id);
    res.json({ mensaje: "Cliente eliminado correctamente" });
});


module.exports = router;
