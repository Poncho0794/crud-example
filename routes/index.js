var express = require('express');
var router = express.Router();
const mealsController = require('../controllers/meals.controllers')
/* GET home page. */

router.get('/', mealsController.index);
router.post('/', mealsController.crear);

router.get('/agregar', mealsController.agregarView)
router.get('/detail/:id', mealsController.detalle)
router.put('/detail/:id', mealsController.update)
router.get('/actualizar/:id', mealsController.actualizarView)
module.exports = router;
