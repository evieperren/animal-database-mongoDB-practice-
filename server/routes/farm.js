const express = require('express')
const router = express.Router()
const farmAnimal  = require('../controller/farm')

router.get('/', function(req, res, next){
    res.send('respond with a resource')
})

router.post('/', farmAnimal.createFarmAnimals)

router.get('/farmAnimals', farmAnimal.findAnimal)

router.delete('/delete', farmAnimal.delete)

module.exports = router