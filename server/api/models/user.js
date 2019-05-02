const mongoose = require('mongoose');
const stringHelpper = require('../../helpers/stringHelpper');

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: String,
    last_name: String,
    email: String,
    dob: {
        day: Number,
        month: Number,
        year: Number
    },
    address: String,
    country: String,
    user_name: String,
    pass_word: String,
    category_acc: String,
    avatar: String,
    create_date: { type: Date, default: Date.now }
}, {
        // Set versionKey of mongoose
        versionKey: false
    });

// Setter
UserSchema
    .path('first_name').set((inputString) => stringHelpper.upperFirstString(inputString));
UserSchema
    .path('last_name').set((inputString) => stringHelpper.upperFirstString(inputString));
module.exports = mongoose.model('User', UserSchema);