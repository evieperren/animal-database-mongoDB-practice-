const mongoose = require('mongoose')
const farmAnimal = mongoose.model('farm animals')

// CREATE
exports.createFarmAnimal = function(data, callback){
    farmAnimal.create(data).then((response) => {
        callback(null, response)
    }, (error) => {
        callback(error, null)
    } )
}

// READ
exports.findAnimal = function(query, callback){
    farmAnimal.findOne(query, callback)
}

// UPDATE 
exports.updateFarmAnimalById = function (id, data, callback) {
    user.findByIdAndUpdate({
        _id: id
    }, data, (err, response) => {
        callback(err, response);
    });
}

exports.updateFarmAnimal = function (query, data, options, callback) {
    user.findOneAndUpdate(query, data, options, (err, response) => {
        callback(err, response);
    });
}

// DELETE
exports.deleteFarmAnimal = function (query, callback) {
    user.deleteOne(query, callback);
}