// Retriving Balance!
const express = require('express');
const router = express.Router();
require('body-parser');
const fetch = require('node-fetch');
const authenticateUser = require('./token_middleware');
const jwt = require('jsonwebtoken');

///add_money
router.post('/', authenticateUser.verifyUser, (req, res) => {
    //node-fetch api;
    let apiCall = () => (
        fetch('http://localhost:9000/add_money',{
          method: 'POST',
          header: {'Content-Type': 'application/json'},
          body: { amountToAdd: req.body.amountToAdd }
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