const router = require('express-promise-router')();
const PlaceControler = require('../controllers/place');
const { validateParam, validateBody, schemas } = require('./../../helpers/routerHepper');

router.route('/')
    .get(PlaceControler.index)
    .post(validateBody(schemas.placeSchema), PlaceControler.newPlace);

router.route('/from/:from_place_id')
    .get(validateParam(schemas.idFromPlaceSchema, 'from_place_id'), PlaceControler.getPlaceFrom);

router.route('/:place_id')
    .get(validateParam(schemas.idPlaceSchema, 'place_id'), PlaceControler.getPlace)
    .delete(validateParam(schemas.idPlaceSchema, 'place_id'), PlaceControler.deletePlace);

module.exports = router;
