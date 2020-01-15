const mongoose = require('mongoose')
const express = require('express')

var petSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('pets', petSchema)