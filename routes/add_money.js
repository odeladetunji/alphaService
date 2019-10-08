// ADD MONEY!
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
                    async function apiCall() {
                        const getApi = await fetch('http://localhost:9000/add_money',{
                                mode: 'cors',
                                method: 'POST',
                                header: {'Content-Type': 'application/json'},
                                body:{ amountToAdd: req.body.amountToAdd }
                        });

                        const data = await getApi.json();
                        res.json(data);
                    }

                    apiCall();
                }
            })
});

module.exports = router;