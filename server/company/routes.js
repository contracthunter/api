const express = require('express');
const Company = require('./company');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    Company.find()
        .populate({ path: 'address' })
        .populate({ path: 'staff' })
        .populate({ path: 'contracts' })
        .exec((error, company) => {
            res.json(company);
        });
});

router.get('/:id', (req, res) => {
    Company.findById(req.params.id)
        .populate({ path: 'address' })
        .populate({ path: 'staff' })
        .populate({ path: 'contracts' })
        .exec((error, company) => {
            res.json(company);
        });
});

router.post('/', (req, res) => {
    const company = new Company({
        name: req.body.name,
        address: req.body.address,
        contracts: req.body.contracts,
        staff: req.body.staff
    });
    company.save((err) => console.error('ERROR: ', err));
    res.json(company);
});

router.put('/:id', (req, res) => {
    Company.findById(req.params.id)
        .exec((error, company) => {
            if (req.body.name) company.name = req.body.name;
            if (req.body.address) company.address = req.body.address;
            if (req.body.contracts) company.contracts = req.body.contracts;
            if (req.body.staff) company.staff = req.body.staff;
            company.save();
            res.json(company);
        });
});

router.delete('/:id', (req, res) => {
    Company.remove({
        _id: req.params.id
    }, (error, company) => {
        res.json(req.params.id);
    });
});

module.exports = router;
