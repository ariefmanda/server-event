var express = require('express');
var router = express.Router();
var eventRouter = require('./event')
var userRouter = require('./user')
var authRouter = require('./auth')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource');
});
router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/event', eventRouter)

module.exports = router;
