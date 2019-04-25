const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('./../models/user');

// Get list
router.get('/get_user_list', (req, res, next) => {
    User.find({}).sort({ lastName: 1 })
        .exec((err, data) => {
            if (err) {
                res.json({
                    status: "fail",
                    err: err
                });
            } else {
                res.json({
                    status: "success",
                    count: data.length,
                    data: data
                });
            }
        });
});

// Get
router.get('/get_user', (req, res, next) => {
    const id = require('mongoose').Types.ObjectId(req.query.user_id);
    User.findById(id)
        .exec((err, data) => {
            if (err) {
                res.json({
                    status: "fail",
                    err: err
                });
            } else {
                res.json({
                    status: "success",
                    data: data
                });
            }
        });
});

// Create
router.post('/add_user', (req, res, next) => {
    User
        .find({ email: req.body.email })
        .exec((err, data) => {
            if (err) {
                res.json({
                    status: "fail",
                    err: err
                });
            } else {
                // If exist
                if (data.length > 0) {
                    // Can't
                    res.json({
                        status: "fail",
                        err: "existed"
                    });
                } else {
                    // Can
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        dob: {
                            day: req.body.day,
                            month: req.body.month,
                            year: req.body.year
                        },
                        address: req.body.address,
                        country: req.body.country
                    });
                    // Save user
                    user
                        .save((err, data) => {
                            if (err) {
                                res.json({
                                    status: "fail",
                                    err: err
                                });
                            } else {
                                res.json({
                                    status: "success",
                                    data: data
                                });
                            }
                        })
                }
            }
        });
});

// Update
router.put('/update_user', (req, res, next) => {
    let conditions = {};
    if (mongoose.Types.ObjectId.isValid(req.body._id) == true) {
        conditions._id = mongoose.Types.ObjectId(req.body.user_id)
    } else {
        res.json({
            status: "fail",
            err: err,
            mess: 'You must enter user_id to update'
        });
    }
    let newValues = {};
    if (req.body.first_name && req.body.last_name && req.body.email && req.body.country) {
        newValues.first_name = req.body.first_name;
        newValues.last_name = req.body.last_name;
        newValues.email = req.body.email;
        newValues.country = req.body.country;
    }
    const options = {
        new: true // return the modified document rather than the original
    }
    User.findOneAndUpdate(conditions, { $set: newValues }, options, (err, data) => {
        if (err) {
            res.json({
                status: "fail",
                err: err
            });
        } else {
            res.json({
                status: "success",
                data: data
            });
        }
    });
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