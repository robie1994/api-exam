const express = require('express');
const bodyParser = require('body-parser')

const app = express()

// Middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
const usersRoute = require('./routes/Users')
app.use('/users', usersRoute)

const port = 3002;

app.listen(port, () => {
    console.log('Connected to port: ', port)
})