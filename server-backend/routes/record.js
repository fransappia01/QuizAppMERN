const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const { connectToServer } = require("../db/conn"); // Importa la función connectToServer del archivo connection.js

// URL de conexión a la base de datos MongoDB
const Db = process.env.ATLAS_URL;

// Endpoint para agregar un nuevo registro
router.post("/add", async (req, res) => {
  try {
    // Conecta a la base de datos
    connectToServer(async function (err, client) {
      if (err) {
        console.error("Error al conectar con la base de datos:", err);
        res.status(500).send("Error interno del servidor");
        return;
      }

      const database = client.db(db); // Reemplaza "tu_basedatos" con el nombre de tu base de datos
      const collection = database.collection("records"); // Nombre de la colección donde se guardarán los registros

      // Guarda los datos del formulario en la base de datos
      await collection.insertOne(req.body);

      res.status(201).send("Registro agregado correctamente");
    });
  } catch (error) {
    console.error("Error al agregar registro:", error);
    res.status(500).send("Error interno del servidor");
  }
});

// Endpoint para obtener todos los registros
router.get("/", async (req, res) => {
  try {
    // Conecta a la base de datos
    connectToServer(async function (err, client) {
      if (err) {
        console.error("Error al conectar con la base de datos:", err);
        res.status(500).send("Error interno del servidor");
        return;
      }

      const database = client.db(db); // Reemplaza "tu_basedatos" con el nombre de tu base de datos
      const collection = database.collection("records"); // Nombre de la colección donde se guardan los registros

      // Obtén todos los registros de la base de datos
      const records = await collection.find({}).toArray();

      res.json(records);
    });
  } catch (error) {
    console.error("Error al obtener registros:", error);
    res.status(500).send("Error interno del servidor");
  }
});

module.exports = router;
