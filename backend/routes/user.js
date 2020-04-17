const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require("../models/userModel");
const router = express.Router();

router.post('/register', (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });

            user.save()
                .then(result => {
                    res.status(200).send({
                        status: 'success',
                        message: 'registered successfully',
                        result: result
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        })
});


let fetchUser;
router.post('/login', (req, res, next) => {

    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: 'email is not authenitacted'
            })
        }
        fetchUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(result => {
        if (!result) {
            return res.status(401).json({
                message: 'password is not authenitacted'
            })
        }
        const token = jwt.sign({ email: req.body.email, userId: fetchUser._id },
            'password_for_token',
            { expiresIn: "1h" });
        res.status(200).json({
            message: 'loged in successfully',
            token: token
        })
    })
        .catch(err => {
            return res.status(401).json({
                message: 'error',
                error: err
            })
        });


})



module.exports = router;
