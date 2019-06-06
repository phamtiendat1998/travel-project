const router = require('express-promise-router')();
const TripControler = require('../controllers/place');
const { validateParam, validateBody, schemas } = require('./../../helpers/routerHepper');

router.route('/')
    .get(TripControler.index)
    .post(validateBody(schemas.tripSchema), TripControler.newTrip);

router.route('/:trip_id')
    .get(validateParam(schemas.idSchema, 'trip_id'), TripControler.getTrip)
    .delete(validateParam(schemas.idSchema, 'trip_id'), TripControler.deleteTrip);

module.exports = router;
