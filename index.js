// Second Server
const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const path = require('path');app.use('*', cors());
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var timeout = require('connect-timeout');
// requiring routes!
const retriveBalance = require('./routes/retrive_balance');
const transactionHistory = require('./routes/show_transaction_history');
const tokenRequest = require('./routes/token_request');

const add_money = require('./routes/add_money');
const remove_money = require('./routes/remove_money');

const whitelist = ['http://localhost:9000', 'http://127.0.0.1:9000', 
                   'http://localhost:8011', 'http://127.0.0.1:8011']
                   
const corsOptions = {    
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));
//express settings
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(timeout('10s'));
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
    console.log("AlphaService Gateway/Authentication Server is Running");
});

module.export = app;


















