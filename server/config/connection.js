const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27015/animals', {useNewUrlParser: true})
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))

db.once('open', function () {
    console.log('connected')
    const app = express()
    app.use(bodyParser.urlencoded({ extended: true }))
    
    const port = 3000
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})
