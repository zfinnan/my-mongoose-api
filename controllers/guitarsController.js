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
    res.send('hello from PUT /guitars/:id')
})

router.delete('/:id', (req, res) => {
    res.send('hello from DELETE /guitars/:id')
})

module.exports = router