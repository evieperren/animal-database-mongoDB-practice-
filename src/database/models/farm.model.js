const mongoose = require('mongoose')
const express = require('express')

var farmSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('farm animals', farmSchema)