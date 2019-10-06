// Second Server
const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const path = require('path');app.use('*', cors());
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// requiring routes!
const add_money = require('./routes/add_money');
const remove_money = require('./routes/remove_money');
const retriveBalance = require('./routes/retrive_balance');
const transactionHistory = require('./routes/show_transaction_history');
const tokenRequest = require('./routes/token_request');

//express settings
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());

//routes  // routes
app.use('/initialHandShake', tokenRequest);
app.use('/add_money', add_money);
app.use('/remove_money', remove_money);
app.use('/retriveBalance', retriveBalance);
app.use('/getTransactionHistory', transactionHistory);

server.listen(8025, function(){
    console.log("Second Api is now Running");
});

module.export = app;

