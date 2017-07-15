const express = require('express');
const Person = require('./person');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    Person.find()
        .populate('address')
        .exec((error, person) => {
            res.json(person);
        });
});

router.get('/:id', (req, res) => {
    Person.findById(req.params.id)
        .populate('address')
        .exec((error, person) => {
            res.json(person);
        });
});

router.post('/', (req, res) => {
    const person = new Person({
        name: {
            first: req.body.firstName,
            last: req.body.lastName
        },
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address || null
    });
    person.save((err) => console.error('ERROR: ', err));
    res.json(person);
});

router.put('/:id', (req, res) => {
    Person.findById(req.params.id)
        .exec((error, person) => {
            if (req.body.firstName) person.name.first = req.body.firstName;
            if (req.body.lastName) person.name.last = req.body.lastName;
            if (req.body.email) person.email = req.body.email;
            if (req.body.phone) person.phone = req.body.phone;
            if (req.body.address) person.address = req.body.address;
            person.save();
            res.json(person);
        });
});

router.delete('/:id', (req, res) => {
    Person.remove({
        _id: req.params.id
    }, (error, person) => {
        res.json(req.params.id);
    });
});

module.exports = router;
