const express = require("express")
const BlaguesAPI = require('blagues-api')
require('dotenv').config()

const TOKEN = process.env.API_TOKEN
const blagues = new BlaguesAPI(TOKEN)

const app = express()
const port = 3000

app.get('/blague/v1', async (req, res) => {
  const response = await fetch ("https://www.blagues-api.fr/api/random", {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
  res.send(await response.json())
})

app.get('/blague/v2', async (req, res) => {
    const response = await blagues.random()
    res.send(response)
})

app.listen(port, () => {
    console.log(`Vous êtes connecté sur le http://localhost:${port}`)
})