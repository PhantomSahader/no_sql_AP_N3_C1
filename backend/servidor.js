// Importamos las librerías instaladas
const express = require('express'); // Express permite generar la aplicación backend
const cors = require('cors'); // Cors permite que el servidor reciba solicitudes externas
const mongoose = require('mongoose'); // ORM que permite trabajar con objetos y DBs
const bodyParser = require('body-parser'); // Permite PARSEAR los datos de un form (inputs) a formato JSON

// Iniciar la aplicación express
const aplicacion = express();
const puerto = 3000;

// Instanciar las clases necesarias en nuestra aplicación
aplicacion.use(cors());
aplicacion.use(express.json());

// Crear la conexión a DB


