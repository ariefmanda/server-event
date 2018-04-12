var express = require('express');
var router = express.Router();
var { findAll , create, update , destroy } = require('../controllers/event')
var cacheMiddleware = require('../middleware/redisCache')
var authentication = require('../middleware/authentication')
/* GET users listing. */
router.get('/', authentication, cacheMiddleware, findAll);
router.post('/', authentication, create);
router.put('/:id', authentication, update);
router.delete('/:id', authentication, destroy)
module.exports = router;
