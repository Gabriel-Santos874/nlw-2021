const express = require('express')
const questionController = require('./controllers/questionController.js')
const roomController = require('./controllers/roomController.js')
const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'})) 
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'})) 

//rota da sala
route.get('/room/:room', (req, res) => res.render("room"))


//ROTA DO FORM
route.post('/question/:room/:question/:action', questionController.index)
route.post('/create-room', roomController.create)



module.exports = route