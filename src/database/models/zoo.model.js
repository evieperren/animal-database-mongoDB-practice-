const mongoose = require('mongoose')
const express = require('express')

var zooSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('zoo animals', zooSchema)