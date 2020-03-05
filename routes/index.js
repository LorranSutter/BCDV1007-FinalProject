const express = require('express');
const router = express.Router();

const index_controller = require('../controllers/indexController');

/* GET home page. */
router.get('/', index_controller.index);

router.get('/index', index_controller.index);

router.get('/auth', index_controller.auth);

module.exports = router;
