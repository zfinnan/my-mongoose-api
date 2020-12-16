require('dotenv').config()

const models = require('./models')

models.Guitar.create({
    make: 'Fender',
    model: 'Stratocaster',
    year: 1970,
    cost: 3000,
    type: 'Electric'
}).then(() => {console.log('done');})