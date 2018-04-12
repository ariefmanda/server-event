var express = require('express');
var router = express.Router();
var { 
    signIn, 
    register,
} = require('../controllers/auth')

router.post('/signIn', signIn );
router.post('/register', register );

module.exports = router;