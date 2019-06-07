const router = require('express-promise-router')();
const TripControler = require('../controllers/trip');
const { validateParam, validateBody, schemas } = require('./../../helpers/routerHepper');

router.route('/')
    .get(TripControler.index)
    .post(validateBody(schemas.tripSchema), TripControler.newTrip);

router.route('/:trip_id')
    .get(validateParam(schemas.idTripSchema, 'trip_id'), TripControler.getTrip)
    .delete(validateParam(schemas.idTripSchema, 'trip_id'), TripControler.deleteTrip);

module.exports = router;
