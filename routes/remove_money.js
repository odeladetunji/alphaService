// Retriving Balance!
const express = require('express');
const router = express.Router();
require('body-parser');
const fetch = require('node-fetch');
const authenticateUser = require('./token_middleware');
const jwt = require('jsonwebtoken');

router.post('/',  authenticateUser.verifyUser, (req, res) => {
    //node-fetch api;
    let apiCall = () => (
        fetch('http://localhost:9000/remove_money',{
           method: 'POST',
           header: {'Content-Type': 'application/json'},
           body: { amountToWidthraw: req.body.amountToWidthraw }
        }).then(response => { 
           res.send(response);
        })
    );

    jwt.verify(req.token, 'private_key', (err, outhData) => {
        if (err) throw err;
        if(!err) apiCall();
    })
});

module.exports = router;