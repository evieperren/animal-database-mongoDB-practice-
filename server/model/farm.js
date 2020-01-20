const mongoose = require('mongoose')

var farmSchema = new mongoose.Schema({
    name: String
})

var FarmAnimal = mongoose.model('farm animals', farmSchema)
module.exports = FarmAnimal