const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController')

router.get('/', staffController.index);

router.get('/:id',staffController.findid)

router.post('/', staffController.insert);

router.delete('/:id',staffController.delete)

router.put('/:id',staffController.update)


module.exports = router;