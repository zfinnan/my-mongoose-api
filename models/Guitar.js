const mongoose = require('mongoose')

const guitarSchema = new mongoose.Schema({
    make: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    year: Number,
    cost: Number,
    type: String
  })
  
  module.exports = mongoose.model('guitars', guitarSchema)