// Retriving Balance!
const express = require('express');
const router = express.Router();
require('body-parser');
const fetch = require('node-fetch');

router.post('/', (req, res) => {
    //node-fetch api;
    fetch('http://localhost:9000',{
       method: 'POST',
       header: {'Content-Type': 'application/json'},
       body: { amountToWidthraw: req.body.amountToWidthraw }
    }).then(response => { 
        res.send(response);
    });
});

module.exports = router;