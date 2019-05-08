const mongoose = require('mongoose');
const stringHelpper = require('../../helpers/stringHelpper');

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: { type: String, default: null },
    last_name: { type: String, default: 'User' },
    email: String,
    dob: { type: Date, default: Date.now },
    address: { type: String, default: null },
    country: { type: String, default: null },
    user_name: String,
    pass_word: String,
    category_acc: String,
    avatar: { type: String, default: null },
    status: { type: Boolean, default: false },
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