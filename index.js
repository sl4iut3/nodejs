const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const parkings = require('./parkings.json')
const reservations = require('./reservations.json')

app.set('view engine','handlebars')
app.engine('handlebars',handlebars({
    layoutsDir: __dirname + '/views/layouts',
}))

app.use(express.json())

app.get('/parkings', (req,res) => {
    res.status(200).render( res.json(parkings) /* 'main'*/ ,{layout : 'index'})
})

app.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
})

app.get('/parkings/:id/reservations', (req,res) => {
    const id = parseInt(req.params.id)
    const reserv = reservations.filter(reserv => reserv.parkingId === id)
    res.status(200).json(reserv)
})


app.post('/parkings', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})
app.put('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name =req.body.name,
    parking.city =req.body.city,
    parking.type =req.body.type,
    res.status(200).json(parking)
})

app.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
//	console.log(parkings)
})
