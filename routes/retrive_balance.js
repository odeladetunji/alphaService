// Retriving Balance!
const express = require('express');
const router = express.Router();
require('body-parser');
const fetch = require('node-fetch');
const authenticateUser = require('./token_middleware');
const jwt = require('jsonwebtoken');

router.get('/',  authenticateUser.verifyUser, (req, res) => {
    //node-fetch api;
    let apiCall = () => (
        fetch('http://localhost:8011/retriveBalance',{
        method: 'GET',
        header: {'Content-Type': 'application/json'}
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