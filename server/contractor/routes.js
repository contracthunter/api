const express = require('express');
const Contractor = require('./contractor');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    Contractor.find()
        .populate({
            path: 'person',
            populate: {
                path: 'address'
            }
        })
        .populate('skills')
        .exec((error, contractor) => {
            res.json(contractor);
        });
});

router.get('/:id', (req, res) => {
    Contractor.findById(req.params.id)
        .populate({
            path: 'person',
            populate: {
                path: 'address'
            }
        })
        .populate('skills')
        .exec((error, contractor) => {
            res.json(contractor);
        });
});

router.post('/', (req, res) => {
    const contractor = new Contractor({
        available: req.body.available,
        availableFrom: req.body.availableFrom,
        dayRate: req.body.dayRate,
        person: req.body.person || null,
        skills: req.body.skills || null
    });
    contractor.save((err) => console.error('ERROR: ', err));
    res.json(contractor);
});

router.put('/:id', (req, res) => {
    Contractor.findById(req.params.id)
        .exec((error, contractor) => {
            if (req.body.available) contractor.available = req.body.available;
            if (req.body.availableFrom) contractor.availableFrom = req.body.availableFrom;
            if (req.body.dayRate) contractor.dayRate = req.body.dayRate;
            if (req.body.person) contractor.person = req.body.person;
            if (req.body.skills) contractor.skills = req.body.skills;
            contractor.save();
            res.json(contractor);
        });
});

router.delete('/:id', (req, res) => {
    Contractor.remove({
        _id: req.params.id
    }, (error, contractor) => {
        res.json(req.params.id);
    });
});

module.exports = router;
