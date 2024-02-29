// Importar el modelo de puntuación
const Record = require('../models/model');

// Función para enviar una nueva puntuación
exports.postResults = async (nombre, puntuacion) => {
  try {
    // Crear una nueva instancia del modelo de puntuación con los datos recibidos
    const nuevaPuntuacion = new Record({ nombre, puntuacion });
    // Guardar la nueva puntuación en la base de datos
    await nuevaPuntuacion.save();
    return { mensaje: 'Puntuación guardada correctamente' };
  } catch (error) {
    console.error('Error al guardar la puntuación:', error);
    throw new Error('Error interno del servidor');
  }
};

// Función para obtener todas las puntuaciones
exports.getResults = async () => {
  try {
    // Consultar todas las puntuaciones en la base de datos
    const puntuaciones = await Record.find();
    console.log("puntuaciones",puntuaciones)
    return puntuaciones;
  } catch (error) {
    console.error('Error al obtener las puntuaciones:', error);
    throw new Error('Error interno del servidor');
  }
};
