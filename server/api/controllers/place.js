const jsonHelpper = require('../../helpers/jsonHelpper');
const mongoose = require('mongoose');
const Place = require('./../models/place');

module.exports = {
    index: async (req, res, next) => {
        const places = await Place.find({});
        jsonHelpper.successJson(200, res, places);
    },
    newPlace: async (req, res, next) => {
        const oldPlaceAcc = await Place.find({ code: req.body.code });
        if (oldPlaceAcc.length > 0) {
            jsonHelpper.failJson(500, res, 'place', 'Place existed');
        } else {
            const newPlace = new Place(req.body);
            newPlace._id = new mongoose.Types.ObjectId();
            const place = await newPlace.save();
            jsonHelpper.successJson(200, res, place);
        };
    },
    getPlace: async (req, res, next) => {
        const { place_id } = req.params;
        const place = await Place.findById({ code: place_id });
        jsonHelpper.successJson(200, res, place);
    },
    deletePlace: async (req, res, next) => {
        const { place_id } = req.params;
        const place = await Place.findByIdAndDelete(place_id);
        jsonHelpper.successJson(200, res, place);
    }
}