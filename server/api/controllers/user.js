const jsonHelpper = require('../../helpers/jsonHelpper');
const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
    index: async (req, res, next) => {
        const users = await User.find({});
        jsonHelpper.successJson(200, res, users);
    },

    newUser: async (req, res, next) => {
        const newUser = new User(req.value.body);
        newUser._id = new mongoose.Types.ObjectId();
        const user = await newUser.save();
        jsonHelpper.successJson(200, res, user);
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