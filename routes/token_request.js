// Retriving Balance!
const express = require('express');
const router = express.Router();
require('body-parser');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
   const aUser = {
       id: 1,
       message: 'microservice gateway, requesting token',
       date: new Date()
   }

   jwt.sign({newUser: aUser} , 'private_key', (err, token) => {
       if (err) throw err;  
       res.json({
           token
       })
   });
});

module.exports = router;