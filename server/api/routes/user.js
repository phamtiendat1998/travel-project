const router = require('express-promise-router')();

const UserControler = require('../controllers/user');

const { validateParam, validateBody, schemas } = require('./../../helpers/routerHepper');
// Handle list
router.route('/')
    .get(UserControler.index)
    .post(validateBody(schemas.userSchema), UserControler.newUser);

// Handle one
router.route('/:user_id')
    .get(validateParam(schemas.idSchema, 'user_id'), UserControler.getUser)
    .put([validateParam(schemas.idSchema, 'user_id'), validateBody(schemas.userSchema)], UserControler.replaceUser)
    .patch([validateParam(schemas.idSchema, 'user_id'), validateBody(schemas.userOptionalSchema)], UserControler.updateUser)
    .delete(validateParam(schemas.idSchema, 'user_id'), UserControler.deleteUser);

module.exports = router;