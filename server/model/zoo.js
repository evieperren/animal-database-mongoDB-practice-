const mongoose = require('mongoose')

var zooSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('zoo animals', zooSchema)