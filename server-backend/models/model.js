const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  nombre: String,
  puntuacion: Number
});

const Record = mongoose.model('Record', RecordSchema);

module.exports = Record;
