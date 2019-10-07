// Retriving Balance!
const express = require('express');
const router = express.Router();
require('body-parser');
const fetch = require('node-fetch');
const authenticateUser = require('./token_middleware');
const jwt = require('jsonwebtoken');

router.post('/',  authenticateUser.verifyUser, (req, res) => {
    //node-fetch api;

    jwt.verify(req.token, 'private_key', (err, outhData) => {
        if (err) throw err;
        if(!err){
            jwt.verify(req.token, 'private_key', (err, outhData) => {
                if (err) throw err;
                if(!err) {
                    apiCall();
                    async function apiCall() {
                       const getApi = await fetch('http://localhost:9000/remove_money',{
                            mode: 'cors',
                            method: 'POST',
                            header: {'Content-Type': 'application/json'},
                            body: JSON.stringify({ amountToWidthraw: req.body.amountToWidthraw })
                       });
                        
                       const data = await getApi.json();
        
                       res.send(data);
                    }
        
                    apiCall();
                    
                }
            })
        }
    })
});

module.exports = router;