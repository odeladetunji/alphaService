// Retriving Balance!
const express = require('express');
const router = express.Router();
require('body-parser');
const fetch = require('node-fetch');
const authenticateUser = require('./token_middleware');
const jwt = require('jsonwebtoken');

router.get('/',  authenticateUser.verifyUser, (req, res) => {
            jwt.verify(req.token, 'private_key', (err, outhData) => {
                if (err) throw err;
                if(!err) {
                    // apiCall();
                    async function apiCall() {
                       const getApi = await fetch('http://localhost:8011/transactionHistory',{
                            mode: 'cors',
                            method: 'GET',
                            header: {'Content-Type': 'application/json'}
                       });
                        
                       const data = await getApi.json();
        
                       res.send(data);
                    }
        
                    apiCall();
                    
                }
            })
});

module.exports = router;