const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    signup,
    login
}

function login(req, res) {
    User.findOne({email: req.body.email}).exec().then(user => {
        if (!user) return res.status(401).json({err: 'bad credentials'});
        user.comparePassword(req.body.pw, function(err, isMatch) {
            if (isMatch) {
                res.json({ token: createJWT(user) });
            } else {
                return res.status(401).json({err: 'bad credentials'});
            }
        });
    }).catch(err => res.status(401).json(err));
}

function signup(req, res) {
    var user = new User(req.body);
    user.save()
    .then(user => {
        res.json({ token: createJWT(user) });
    })
    .catch(err => res.status(400).json(err));
}

/*----- Helper Functions -----*/

function createJWT(user) {
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    );
}