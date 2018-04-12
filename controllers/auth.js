const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const user = require('../models/user')

module.exports = {
    signIn: (req, res, next) => {
        user.findOne({
            email: req.body.email
        })
            .then(users => {
                if (bcrypt.compareSync(req.body.password, users.password)) {
                    var token = jwt.sign({ users }, 'exampleSecret')
                    res.send({
                        message: "Login succeess",
                        users,
                        token,
                    })
                } else {
                    res.send({
                        message: 'Login fail'
                    })
                }
            })
            .catch(err => next(err))
    },
    findById: (req, res, next) => {
        user.findById(req.params.id)
            .then(users => res.json(users))
            .catch(err => next(err))
    },
    register: (req, res, next) => {
        user.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        })
            .then(users => res.json(users))
            .catch(err => next(err))
    },
    updateProfile: (req, res, next) => {
        user.findByIdAndUpdate(req.decoded._id, {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
        })
            .then(users => res.json(users))
            .catch(err => next(err))
    },
    destroyAccount: (req, res, next) => {
        user.findByIdAndRemove(req.decoded._id)
            .then(users => res.json(users))
            .catch(err => next(err))
    },
}