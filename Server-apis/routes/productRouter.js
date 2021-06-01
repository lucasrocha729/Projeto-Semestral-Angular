var express = require('express');
var router = express.Router();
const ProductController = require('../controllers/productController');


router.get('/', ProductController.list);
router.post('/', ProductController.create);
router.get('/:productId', ProductController.findById);
router.put('/:productId', ProductController.update);
router.delete('/:productId', ProductController.delete);


// function generateId(){
//   let biggestId = 0;
//   for (let i=0; i < products.length; i++){
//     if (products[i].id > biggestId){
//       biggestId = products[i].id;
//     }
//   }
//   return biggestId + 1;
// }

// function getIndex(id){
//   let idx;
//   for(let i=0; i<products.length; i++){
//     if (products[i].id == id){
//       idx = i;
//       break;
//     }
//   }
//   return idx;
// }

/* GET a lista de produtos. */
// router.get('/', function (req, res, next) {
//   res.json(products);
// });


//unico product
// router.get('/:productId', function (req, res, next) {
//   let productId = req.params.productId;
//   let product = products[getIndex(productId)];
//   res.json(product);
// });

// router.post('/', function (req, res, next) {
//   let product = req.body;
//   product.id = generateId();
//   products.push(product);
//   res.status(204).send();
// });

// router.put('/:productId', function (req, res, next) {
//   let id = req.params.productId;
//   let product = req.body;
//   products.splice(getIndex(id), 1, product);
//   res.status(204).send();
// });

// router.delete('/:productId', function (req, res, next) {
//   let productId = req.params.productId;
//   products.splice(getIndex(productId), 1);
//   res.status(204).send();
// });

module.exports = router;
