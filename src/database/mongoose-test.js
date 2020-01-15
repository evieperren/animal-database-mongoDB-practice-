const mongoose = require('mongoose')
const express = require('express')


mongoose.connect('mongodb://localhost:27015/animals', {useNewUrlParser: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function(){
    console.log('connected')

    const app = express()
    const port = 3000
    app.get('/kittenPage', function(req, res) {
        var kitty = new Kitten({name: req.query.kitten})
        kitty.save()
        res.send(kitty)
        console.log(req.query)
    }) 
    app.get('/safariZoo', function(req, res){
        var safari = new SafariAnimal({name: req.query.safari})
        safari.save()
        res.send(safari)
    })

    app.get('/farmAnimals', function(req, res){
        var fourlegs = new FarmAnimal({name: req.query.farm})
        fourlegs.save()
        res.send(fourlegs)
    })
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))

    var animalSchema = new mongoose.Schema({
        name: String
    })
    
    var Kitten = mongoose.model('tabbies', animalSchema)
    let SafariAnimal = mongoose.model('zoo animals', animalSchema)
    let FarmAnimal = mongoose.model('farm animals', animalSchema)
})
