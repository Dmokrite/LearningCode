const express = require('express');
const carRoutes = require('./controller/userController');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3002;

app.use(express.json())

app.use('/', carRoutes)

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`)
})
