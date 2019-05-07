const jsonHelpper = require('../../helpers/jsonHelpper');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = {
    index: async (req, res, next) => {
        const users = await User.find({});
        jsonHelpper.successJson(200, res, users);
    },

    newUser: async (req, res, next) => {
        const newUser = new User(req.value.body);
        const oldUserAcc = User.find({ user_name: req.value.body.user_name });
        if (oldUserAcc.length > 0) {
            jsonHelpper.failJson(500, res, 'account', 'Account existed');
        } else {
            newUser._id = new mongoose.Types.ObjectId();
            bcrypt.hash(req.value.body.pass_word, 10, (err, hash) => {
                if (err) {
                    jsonHelpper.failJson(500, res, err);
                } else {
                    newUser.pass_word = hash;
                };
            });
            const user = await newUser.save();
            jsonHelpper.successJson(200, res, user);
        };
    },
    login: async (req, res, next) => {  
        const userLogin = await User.find({ user_name: req.body.user_name });
        if (userLogin.length < 1) {
            jsonHelpper.failJson(500, res, 'account', 'Account not found');
        } else {
            bcrypt.compare(req.body.pass_word, userLogin[0].pass_word, (err, result) => {
                if (err) {
                    jsonHelpper.failJson(500, res, err, 'Auth failed');
                }
                if (result) {
                    const token = jwt.sign({
                        userId: userLogin[0]._id,
                        userName: userLogin[0].user_name
                    },
                        'secret',
                        {
                            expiresIn: '1h'
                        });
                    return jsonHelpper.successJson(200, res, token, 'Login successfull');
                }
            });
        };
    },
    getUser: async (req, res, next) => {
        const { user_id } = req.value.params;
        const user = await User.findById(user_id);
        jsonHelpper.successJson(200, res, user);
    },

    // Full fill is necessary
    replaceUser: async (req, res, next) => {
        const { user_id } = req.value.params;
        const newUser = req.value.body;
        const result = await User.findByIdAndUpdate(user_id, newUser);
        jsonHelpper.successJson(200, res, newUser);
    },

    // Number of fill is necessary
    updateUser: async (req, res, next) => {
        const { user_id } = req.value.params;
        const newUser = req.value.body;
        const result = await User.findByIdAndUpdate(user_id, newUser);
        jsonHelpper.successJson(200, res, newUser);
    },

    deleteUser: async (req, res, next) => {
        const { user_id } = req.value.params;
        const user = await User.findByIdAndDelete(user_id);
        jsonHelpper.successJson(200, res, user);
    }
};