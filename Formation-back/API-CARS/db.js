const mysql = require('mysql2')
require('dotenv').config()

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données :' + err.stack)
        return
    }
    console.log('Vous êtes connecté à la base de données MySql')
})

module.exports = db