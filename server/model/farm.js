const mongoose = require('mongoose')

var farmSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('farm animals', farmSchema)