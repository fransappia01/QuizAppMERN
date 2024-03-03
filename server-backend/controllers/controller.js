// Importar el modelo de puntuación
const Record = require('../models/model');
const express = require("express");

// Función para enviar una nueva puntuación
exports.postResults = async (req, res) => {
  try {
    const { nombre, puntuacion } = req.body;
    // Crear una nueva instancia del modelo de puntuación con los datos recibidos
    const nuevaPuntuacion = new Record({ nombre, puntuacion });
    // Guardar la nueva puntuación en la base de datos
    await nuevaPuntuacion.save();
    res.json({ mensaje: 'Puntuación guardada correctamente' });
  } catch (error) {
    console.error('Error al guardar la puntuación:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Función para obtener todas las puntuaciones
exports.getResults = async (req, res) => {
    try {
      // Usa el modelo de registro para buscar todos los registros en la base de datos
      const puntuaciones = await Record.find()
      res.json(puntuaciones);
      console.log(puntuaciones, "points")
    } catch (error) {
      console.error('Error al obtener las puntuaciones:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };


  //routes

  
const router = express.Router();

// Importar las funciones del controlador
const { postResults, getResults } = require('./controller');

// Ruta para enviar una nueva puntuación
router.post('/resultado', postResults);

// Ruta para obtener todas las puntuaciones
router.get('/allresults', getResults);

module.exports = router;
