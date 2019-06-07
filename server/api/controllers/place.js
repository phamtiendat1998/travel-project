const jsonHelpper = require('../../helpers/jsonHelpper');
const mongoose = require('mongoose');
const Place = require('./../models/place');
const Trip = require('./../models/trip');

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
        const place = await Place.findById(place_id);
        jsonHelpper.successJson(200, res, place);
    },
    getPlaceFrom: async (req, res, next) => {
        const { from_place_id } = req.params;
        const trip = await Trip.find({ from: from_place_id });
        const results = trip.map(async (trip) => {
            const place = await Place.findById(trip.to);
            return place;
        });
        Promise.all(results).then((completed) => {
            jsonHelpper.successJson(200, res, completed);
        })
    },
    deletePlace: async (req, res, next) => {
        const { place_id } = req.params;
        const place = await Place.findByIdAndDelete(place_id);
        jsonHelpper.successJson(200, res, place);
    }
}