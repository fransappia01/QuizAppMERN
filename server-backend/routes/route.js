const express = require('express');
const router = express.Router();

// Importar las funciones del controlador
const record = require('../controllers/controller');

// Ruta para enviar una nueva puntuación
router.post('/resultado', record.postResults);

// Ruta para obtener todas las puntuaciones
router.get('/allresults', record.getResults);

module.exports = router;

// no se esta usando este archivo!