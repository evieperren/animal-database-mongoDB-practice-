const farmService = require('../service/farm')

exports.create = function (req, res, next){
    const body = new FarmAnimal(req.body)
    if(!body.name){
        res.status(400).send('name is missing')
        return
    }

    farmService.createFarmAnimal(body, function(error, response){
        if (response) {
            res.status(201).send(response)
        } else if (error) {
            res.status(400).send(error)
        }
    })
}

class FarmAnimal {
    constructor(farmData){
        this.name = farmData.name || ''
    }
}