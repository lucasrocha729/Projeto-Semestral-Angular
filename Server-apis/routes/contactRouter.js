<<<<<<< HEAD
var express = require('express');
const ContactController = require('../controllers/contactController');
var router = express.Router();


router.get('/', ContactController.list);
router.post('/', ContactController.create);
// router.get('/:contactId', ContactController.findById);
// router.put('/:contactId', ContactController.update);
// router.delete('/:contactId', ContactController.delete);

module.exports = router;
=======
var express = require('express');
const ContactController = require('../controllers/contactController');
var router = express.Router();


router.get('/', ContactController.list);
router.post('/', ContactController.create);
// router.get('/:contactId', ContactController.findById);
// router.put('/:contactId', ContactController.update);
// router.delete('/:contactId', ContactController.delete);

module.exports = router;
>>>>>>> 8f9e6f0509b280158850db69a661d959adb5a0e7
