var express = require('express');
var router = express.Router();
var { 
    findById , 
    updateProfile, 
    destroyAccount 
} = require('../controllers/auth')
var authentication = require('../middleware/authentication')
/* GET users listing. */
router.get('/:id', findById);
router.put('/',authentication, updateProfile );
router.delete('/:id', authentication, destroyAccount)

module.exports = router;