const express = require('express');
const bodyparser = require('body-parser');

const app = express();


var products = [{
        id: 1,
        name: 'Product1',
        price: 100,
        imageUrl: 'http://test.com',
        createdDate: new Date('11-10-1987')
    },
    {
        id: 2,
        name: 'Product2',
        price: 2000,
        imageUrl: 'http://test.com',
        createdDate: new Date('11-10-1987')
    },
    {
        id: 3,
        name: 'Product3',
        price: 3000,
        imageUrl: 'http://test.com',
        createdDate: new Date('11-10-1987')
    }
];

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin , X-Requested-With,Content-Type, Accept');
    next();
});

app.get('/api/product', function (req, res) {
    res.send(products);
});

app.post('/api/product', function (req, res) {
    products.push(req.body);
    res.send(products);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});