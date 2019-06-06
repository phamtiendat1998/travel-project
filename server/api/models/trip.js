const mongoose = require('mongoose');

const TripSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Place'
    },
    price: Number,
    time: {
        day: Number,
        night: Number
    },
    timeFlight: Number,
    departure: {
        fromStart: { type: Date, default: Date.now },
        toStart: { type: Date, default: Date.now },
        fromEnd: { type: Date, default: Date.now },
        toEnd: { type: Date, default: Date.now }
    }
}, {
        versionKey: false
    });

module.exports = mongoose.model('Trip', TripSchema);
