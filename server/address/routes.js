const express = require('express');
const Address = require('./address');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    Address.find()
        .exec((error, address) => {
            res.json(address);
        });
});

router.get('/:id', (req, res) => {
    Address.findById(req.params.id)
        .exec((error, address) => {
            res.json(address);
        });
});

router.post('/', (req, res) => {
    const address = new Address({
        name: req.body.name,
        street: req.body.street,
        town: req.body.town,
        county: req.body.county,
        postcode: req.body.postcode,
        country: req.body.country
    });
    address.save();
    res.json(address);
});

router.put('/:id', (req, res) => {
    Address.findById(req.params.id)
        .exec((error, address) => {
            if (req.body.name) address.name = req.body.name;
            if (req.body.street) address.street = req.body.street;
            if (req.body.town) address.town = req.body.town;
            if (req.body.county) address.county = req.body.county;
            if (req.body.postcode) address.postcode = req.body.postcode;
            if (req.body.country) address.country = req.body.country;
            address.save();
            res.json(address);
        });
});

router.delete('/:id', (req, res) => {
    Address.remove({
        _id: req.params.id
    }, (error, address) => {
        res.json(req.params.id);
    });
});

module.exports = router;
