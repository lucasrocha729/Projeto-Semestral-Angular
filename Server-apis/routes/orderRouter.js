var express = require('express');
var router = express.Router();
const OrderController = require('../controllers/orderController');
const auth = require('../auth/auth');

router.unsubscribe(auth.autorizar);

router.get('/:userId', OrderController.list);
router.post('/', OrderController.create);
router.get('/:orderId', OrderController.findById);
router.put('/:orderId', OrderController.update);
router.delete('/:orderId', OrderController.delete);


module.exports = router;
