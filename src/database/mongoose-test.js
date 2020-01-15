const mongoose = require('mongoose')
const express = require('express')

// connect to your database (can see what port the container it is running from by kitematic)
mongoose.connect('mongodb://localhost:27015/animals', {useNewUrlParser: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function(){
    console.log('connected')

    // create an instance of express
    const app = express()
    const port = 3000
    // create an event listener to watch the route, with a call back functions
    app.get('/kittenPage', function(req, res) {

        // create an instance of the object and assign one of the key value pairs to a value. The value is created by entering a query string (?kitten=black). The last part of the name is the actual value
        var kitty = new Kitten({name: req.query.kitten})
        // send the information stored in your new object to the database
        kitty.save()
        // send the information to the browser (default into body)
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
    // ensure the instance is listerning to the port defined 
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))

    // create a blueprint for what your document must include 
    var animalSchema = new mongoose.Schema({
        name: String
    })
    
    // create an object that references the collection and the schema it needs to use
    var Kitten = mongoose.model('tabbies', animalSchema)
    let SafariAnimal = mongoose.model('zoo animals', animalSchema)
    let FarmAnimal = mongoose.model('farm animals', animalSchema)

})
