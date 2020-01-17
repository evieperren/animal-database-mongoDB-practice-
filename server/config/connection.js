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
    









    app.get('/kittenPage', function (req, res) {

        // create an instance of the object and assign one of the key value pairs to a value. The value is created by entering a query string (?kitten=black). The last part of the name is the actual value
        var kitty = new Kitten({ name: req.query.kitten })
        // send the information stored in your new object to the database
        kitty.save()
        // send the information to the browser (default into body)
        res.send(kitty)
        console.log(req.query)
    })
    app.get('/safariZoo', function (req, res) {
        var safari = new SafariAnimal({ name: req.query.safari })
        safari.save()
        res.send(safari)
    })

    app.get('/farmAnimals', function (req, res) {
        var fourlegs = new FarmAnimal({ name: req.query.farm })
        fourlegs.save()
        res.sendFile(__dirname + '/index.html')
    })

    app.post('/farmAnimals', function (req, res) {
        console.log(req.body)
        res.send('yay')
    })


    var animalSchema = new mongoose.Schema({
        name: String
    })
    app.get('/', function (req, res) {
        db.collection('tabbies').find({}, function (err, data) {
            if (err) throw err
            res.send(data)
        })
    })
    var Kitten = mongoose.model('tabbies', animalSchema)
    const SafariAnimal = require("./models/zoo.model.js")
    let FarmAnimal = require("./models/farm.model")


    db.collection('tabbies').findOne({}, function (err, result) {
        if (err) throw err

        console.log(result.name)
        db.close()
    })
})