const jsonHelpper = require('../../helpers/jsonHelpper');
const mongoose = require('mongoose');
const Trip = require('./../models/trip');
module.exports = {
    index: async (req, res, next) => {
        const trips = await Trip.find({});
        jsonHelpper.successJson(200, res, trips);
    },
    newTrip: async (req, res, next) => {
        const oldTripAcc = await Trip.find({ from: req.body.from, to: req.body.to });
        if (oldTripAcc.length > 0) {
            jsonHelpper.failJson(500, res, 'trip', 'Trip existed');
        } else {
            const newTrip = new Trip(req.body);
            newTrip._id = new mongoose.Types.ObjectId();
            const trip = await newTrip.save();
            jsonHelpper.successJson(200, res, trip);
        };
    },
    getTrip: async (req, res, next) => {
        const { trip_id } = req.params;
        const trip = await Trip.findById({ _id: trip_id });
        jsonHelpper.successJson(200, res, trip);
    },
    deleteTrip: async (req, res, next) => {
        const { trip_id } = req.params;
        const trip = await Trip.findByIdAndDelete(trip_id);
        jsonHelpper.successJson(200, res, trip);
    }
}