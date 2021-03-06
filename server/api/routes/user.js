const router = require('express-promise-router')();
const UserControler = require('../controllers/user');
const { validateParam, validateBody, schemas } = require('./../../helpers/routerHepper');

router.route('/')
    .get(UserControler.index)
    .post(validateBody(schemas.userSchema), UserControler.newUser);

router.route('/:user_id')
    .get(validateParam(schemas.idUserSchema, 'user_id'), UserControler.getUser)
    .put([validateParam(schemas.idUserSchema, 'user_id'), validateBody(schemas.userSchema)], UserControler.replaceUser)
    .patch([validateParam(schemas.idUserSchema, 'user_id'), validateBody(schemas.userOptionalSchema)], UserControler.updateUser)
    .delete(validateParam(schemas.idUserSchema, 'user_id'), UserControler.deleteUser);

router.route('/signin')
    .post(validateBody(schemas.accountSchema), UserControler.login);

router.route('/signup')
    .post(validateBody(schemas.userSchema), UserControler.newUser);
module.exports = router;