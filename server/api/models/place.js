const mongoose = require('mongoose');

const PlaceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    code: String,
    name: String,
    area: String,
    temp: Number,
    location: {
        x: Number,
        y: Number
    },
    airport: [String],
    category: String
}, {
        versionKey: false
    });

module.exports = mongoose.model('Place', PlaceSchema);
