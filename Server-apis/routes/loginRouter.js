var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');


router.get('/', loginController.list);
router.post('/', loginController.create);
router.get('/:clientId', loginController.findById);
router.put('/:clientId', loginController.update);
router.delete('/:clientId', loginController.delete);
router.post('/login', loginController.login);


module.exports = router;
