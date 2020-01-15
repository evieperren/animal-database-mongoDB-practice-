const mongoose = require('mongoose')
const express = require('express')


mongoose.connect('mongodb://localhost:27015/animals', {useNewUrlParser: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function(){
    // connected
    console.log('connected')

    const app = express()
    const port = 3000
    app.get('/kittenPage', function(req, res) {
        var kitty = new Kitten({name: req.query.kitten})
        kitty.save()
        res.send(kitty)
        console.log(req.query)
    }) 

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))

    var kittenSchema = new mongoose.Schema({
        name: String
    })
    
    var Kitten = mongoose.model('Cats', kittenSchema)
})
