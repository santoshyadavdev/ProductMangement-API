const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const productApi = require('./api/product.api');
const dbLogger = require('./middleware/dblogger');
var MongoClient = require('mongodb').MongoClient;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin , X-Requested-With,Content-Type, Accept');
    next();
});



MongoClient.connect('mongodb://localhost:27017/ProductManagement', function (err, db) {
    app.use(dbLogger);
    productApi(app, db);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});