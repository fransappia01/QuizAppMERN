const express = require("express");
const router = express.Router();
const Record = require('../models/model');

// Endpoint para agregar un nuevo registro
router.post("/add", async (req, res) => {
  try {
    // Crear una nueva instancia del modelo de puntuación con los datos recibidos
    const nuevaPuntuacion = new Record(req.body);
    // Guardar los datos del formulario en la base de datos
    await nuevaPuntuacion.save();
    res.status(201).send("Registro agregado correctamente");
  } catch (error) {
    console.error("Error al agregar registro:", error);
    res.status(500).send("Error interno del servidor post");
  }
});

// Endpoint para obtener todos los registros
router.get("/", async (req, res) => {
  try {
    // Obtener todos los registros de la base de datos
    const records = await Record.find({});
    res.json(records);
  } catch (error) {
    console.error("Error al obtener registros:", error);
    res.status(500).send("Error interno del servidor get");
  }
});

module.exports = router;