const mongoose = require('mongoose')

var farmSchema = new mongoose.Schema({
    name: String
})

var farmAnimal = mongoose.model('farm animals', farmSchema)
module.exports = farmAnimal