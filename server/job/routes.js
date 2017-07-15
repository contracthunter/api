const express = require('express');
const Job = require('./job');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    Job.find()
        .populate('company')
        .exec((error, job) => {
            res.json(job);
        });
});

router.get('/:id', (req, res) => {
    Job.findById(req.params.id)
        .populate('company')
        .exec((error, job) => {
            res.json(job);
        });
});

router.post('/', (req, res) => {
    const job = new Job({
        company: req.body.company,
        minRate: req.body.minRate,
        maxRate: req.body.maxRate
    });
    job.save((err) => console.error('ERROR: ', err));
    res.json(job);
});

router.put('/:id', (req, res) => {
    Job.findById(req.params.id)
        .exec((error, job) => {
            if (req.body.company) job.company = req.body.company;
            if (req.body.minRate) job.minRate = req.body.minRate;
            if (req.body.maxRate) job.maxRate = req.body.maxRate;
            job.save();
            res.json(job);
        });
});

router.delete('/:id', (req, res) => {
    Job.remove({
        _id: req.params.id
    }, (error, job) => {
        res.json(req.params.id);
    });
});

module.exports = router;
