const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/cars', (req, res) => {
    const SELECT_ALL_CARS_QUERY = 'SELECT * FROM cars'
    db.query(SELECT_ALL_CARS_QUERY, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des voitures :' + err.message)
            res.status(500).json ({
            error: 'Erreur lors de la récupération des voitures'
            })  
        return      
        }
        res.status(200).json(results)
    })
})

router.get('/cars/:id', (req, res) => {
    const carId = req.params.id
    const SELECT_CAR_BY_ID_QUERY = 'SELECT * FROM cars WHERE id = ?'
    db.query(SELECT_CAR_BY_ID_QUERY, [carId], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des voitures :' + err.message)
            res.status(500).json ({
            error: 'Erreur lors de la récupération des voitures'
            })  
        return      
        }
        if (results.length === 0) {
            res.status(404).json ({error: "voiture non trouvée"})
        } else {
            res.status(200).json(results[0])
        }
    })
})

router.put('/cars/:id', (req, res) => {
    const carId = req.params.id
    const {name, price} = req.body
    const UPDATE_CAR_QUERY = "UPDATE cars SET name = ?, price = ? WHERE ID = ?"
    db.query(UPDATE_CAR_QUERY, [name, price, carId], (err, result) => {
        if (err) {
            console.error("Erreur lors de la mise à jour de la voiture :" + err.message)
            res.status(500).json({ 
                error: "Erreur lors de mise à jour de la voiture"
            })
            return
        } if (result.affectedRows === 0) {
            res.status(404).json({
                error: "voiture non trouvée"
            })
        } else {
            res.status(200).json({
                message: 'voiture mise à jour avec succés'
            })
        }
    })
})

router.delete('/cars/:id', (req, res) => {
    const carId = req.params.id
    const {name, price} = req.body
    const DELETE_CAR_QUERY = "DELETE FROM cars WHERE ID = ?"
    db.query(DELETE_CAR_QUERY, [carId], (err, result) => {
        if (err) {
            console.error("Erreur lors de la mise à jour de la voiture :" + err.message)
            res.status(500).json({ 
                error: "Erreur lors de mise à jour de la voiture"
            })
            return
        } if (result.affectedRows === 0) {
            res.status(404).json({
                error: "voiture non trouvée"
            })
        } else {
            res.status(200).json({
                message: 'voiture mise à jour avec succés'
            })
        }
    })
})

router.post('/cars', (req, res) => {
    const {name, price} = req.body
    const INSERT_CARS_QUERY= "INSERT INTO cars (name, price) VALUES (?, ?)"
     db.query(INSERT_CARS_QUERY, [name, price], (err, result) => {
        if (err) {
            console.error("Erreur de l'ajout de la voiture :" + err.message)
            res.status(500).json({
                error: "Erreur lors de la création d'une voiture"
            })
            return
        }
        res.status(201).json({
            message: "voiture créée avec succés", id: result.insertId
        })
    })
})

module.exports = router