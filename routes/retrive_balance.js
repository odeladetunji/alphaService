// Retriving Balance!
const express = require('express');
const router = express.Router();
require('body-parser');
const fetch = require('node-fetch');

router.get('/', (req, res) => {
    //node-fetch api;
    fetch('http://localhost:8011',{
       method: 'GET',
       header: {'Content-Type': 'application/json'}
    }).then(response => {
        res.send(response);
    });
});

module.exports = router;