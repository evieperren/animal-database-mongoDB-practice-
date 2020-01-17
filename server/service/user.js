const mongoose = require('mongoose')
let colour = mongoose.model('Primary')

exports.createColour = function(data, callback){
    colour.create(data).then((response) => {
        callback(null, response)
    }, (error) => {
        callback(error, null)
    } )
}

