const mongoose = require('mongoose')

var petSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('pets', petSchema)