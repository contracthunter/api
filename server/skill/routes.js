const express = require('express');
const Skill = require('./skill');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    Skill.find()
        .exec((error, skill) => {
            res.json(skill);
        });
});

router.get('/:id', (req, res) => {
    Skill.findById(req.params.id)
        .exec((error, skill) => {
            res.json(skill);
        });
});

router.post('/', (req, res) => {
    const skill = new Skill({
        label: req.body.label,
        level: req.body.level
    });
    skill.save((err) => console.error('ERROR: ', err));
    res.json(skill);
});

router.put('/:id', (req, res) => {
    Skill.findById(req.params.id)
        .exec((error, skill) => {
            if (req.body.label) skill.label = req.body.label;
            if (req.body.level) skill.level = req.body.level;
            skill.save();
            res.json(skill);
        });
});

router.delete('/:id', (req, res) => {
    Skill.remove({
        _id: req.params.id
    }, (error, skill) => {
        res.json(req.params.id);
    });
});

module.exports = router;
