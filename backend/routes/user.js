const express = require('express');
const bcrypt = require('bcrypt');

const User = require("../models/userModel");
const router = express.Router();

router.post('/register', (req, res, next) => {
    bcrypt.hash(req.body.password , 10) 
        .then(hash =>{
            const user = new User({
                email : req.body.email,
                password: hash
            });

            user.save()
                .then(result => {
                    res.status(200).send({
                        status: 'success',
                        message : 'registered successfully',
                        result : result
                    });
                })
                .catch(err =>{
                    res.status(500).json({
                        error : err
                    });
                }) ;
        })
});


module.exports = router;
