const router = require('express-promise-router')();

const PlaceControler = require('../controllers/place');

const { validateParam, validateBody, schemas } = require('./../../helpers/routerHepper');

router.route('/')
    .get(PlaceControler.index)
    .post(validateBody(schemas.placeSchema), PlaceControler.newPlace);

router.route('/:place_id')
    .get(validateParam(schemas.idSchema, 'place_id'), PlaceControler.getPlace)
    .delete(validateParam(schemas.idSchema, 'place_id'), PlaceControler.deletePlace);

module.exports = router;
