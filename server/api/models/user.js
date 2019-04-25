const mongoose = require('mongoose');
const helperString = require('./../../helpers/string');

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    dob: {
        day: Number,
        month: Number,
        year: Number
    },
    address: String,
    country: { type: String, required: true },
    create_date: { type: Date, default: Date.now }
}, {
        // Set versionKey of mongoose
        versionKey: false
    });

// Setter
UserSchema
    .path('first_name').set((inputString) => helperString.upperFirstString(inputString));
UserSchema
    .path('last_name').set((inputString) => helperString.upperFirstString(inputString));
module.exports = mongoose.model('User', UserSchema);