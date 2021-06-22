var express = require('express');
var router = express.Router();
const ClientController = require('../controllers/clientController');


router.get('/', ClientController.list);
router.post('/', ClientController.create);
router.get('/:clientId', ClientController.findById);
router.put('/:clientId', ClientController.update);
router.delete('/:clientId', ClientController.delete);

module.exports = router;
