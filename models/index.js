const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/guitarCollection`)

const db = mongoose.connection;

module.exports = {
  Guitar: require('./Guitar'),
}