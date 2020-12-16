const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res) => {
    models.Guitar.find().then((foundGuitars) => {
        res.status(200).json({ guitars: foundGuitars })
    })
    .catch((err) => { res.send(err) })
})

router.get('/:id', (req, res) => {
    models.Guitar.findOne({_id: req.params.id}).then((guitar) => {
        res.status(200).json({ guitar })
    })
    .catch((err) => { res.send(err) })
})

router.post('/', (req, res) => {
    models.Guitar.create(req.body).then((guitar) => {
        res.status(201).json({ guitar })
    })
    .catch((err) => { res.send(err) })
})

router.put('/:id', (req, res) => {
    models.Guitar.update({id: req.params.id}, {$set: {make: `${whatever}`}})
    .then((updatedGuitar) => {
        res.status(200).json({ updatedGuitar })
    })
})

router.delete('/:id', (req, res) => {
    models.Guitar.deleteMany().then(() => {
        console.log('done');
      })
})

module.exports = router