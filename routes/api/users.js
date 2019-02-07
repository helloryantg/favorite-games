let express = require('express');
let router = express.Router();
let User = require('../../models/user');
let usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

/*---------- Protected Routes ----------*/


module.exports = router;