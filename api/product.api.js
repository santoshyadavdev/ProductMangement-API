module.exports = function (app, db) {

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

    app.get('/api/product', function (req, res) {
        db.collection('product').find().toArray(function (err, result) {
            res.send(result);
        });
    });

    // app.get('/api/product/:id', function (req, res) {
    //     console.log(req.params);
    //     var id = req.params.id;
    //     var query = {
    //         'id': req.params.id
    //     };
    //     console.log(id);
    //     var cursor = db.collection('product').find(query);
    //     // console.log(data);
    //     cursor.nextObject(function (err, item) {
    //         console.log(item);
    //     });
    //     res.send(id);
    // });

    app.post('/api/product', function (req, res) {
        products.push(req.body);
        db.collection('product').insertOne(req.body).then(function (result) {
            res.send(result);
        });
    });

}