var express = require('express');
var router = express.Router();
const StatusController = require('../controllers/statusController');


router.get('/', StatusController.list);
router.post('/', StatusController.create);
router.get('/:statusId', StatusController.findById);
router.put('/:statusId', StatusController.update);
router.delete('/:statusId', StatusController.delete);


module.exports = router;
