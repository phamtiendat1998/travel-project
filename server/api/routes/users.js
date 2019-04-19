const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        mass: 'Handling GET requets'
    })
});

router.post('/', (req, res, next) => {
    const user = {
        name: req.body.name,
        birthday: req.body.birthday
    };
    res.status(201).json({
        mass: 'Handling POST requets',
        createUser: user
    })
});

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    if (id === 'special') {
        res.status(200).json({
            mass: 'Handling POST requets',
            id: id
        });
    } else {
        res.status(200).json({
            mass: 'You passed an ID',
        });
    }
});

router.patch('/:userId', (req, res, next) => {
    res.status(200).json({
        mass: 'Upadte success',
        id: req.params.userId
    });
});

router.delete('/:userId', (req, res, next) => {
    res.status(200).json({
        mass: 'Delete success',
        id: req.params.userId
    });
});

module.exports = router;