const router = require('express-promise-router')();
const ImageControler = require('../controllers/image');

router.route('/avatar')
    .post(ImageControler.uploadOne)
    .get(ImageControler.getOne);

module.exports = router;