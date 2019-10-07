// Retriving Balance!
const http = require('http');
const express = require('express');
const router = express.Router();
require('body-parser');
const fetch = require('node-fetch');
const authenticateUser = require('./token_middleware');
const jwt = require('jsonwebtoken');

///add_money
router.post('/', authenticateUser.verifyUser, (req, res) => {
    

    jwt.verify(req.token, 'private_key', (err, outhData) => {
        if (err) throw err;
        if(!err) {
            apiCall();
            async function apiCall() {
               const getApi = await fetch('http://127.0.0.1:9000/add_money',{
                    mode: 'cors',
                    method: 'POST',
                    header: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ amountToAdd: req.body.amountToAdd })
               });
                
               const data = await getApi.json();

               res.send(data);
            }

            apiCall();
            
        }
    })
    
});

module.exports = router;