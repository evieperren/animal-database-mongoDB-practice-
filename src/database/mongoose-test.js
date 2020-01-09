var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27015/animals', {useNewUrlParser: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function(){
    // connected
    console.log('connected')

    var kittenSchema = new mongoose.Schema({
        name: String
    })
    
    var Kitten = mongoose.model('Tabby', kittenSchema)
    
    var ginger = new Kitten({name: 'Ginger'})
    console.log(ginger.name)
})
