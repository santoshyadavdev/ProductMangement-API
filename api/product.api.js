module.exports = function (app, db) {


    app.get('/api/product', function (req, res) {
        db.collection('product').find().toArray(function (err, result) {
            res.send(result);
        });
    });

    app.get('/api/product/:id', function (req, res) {
        console.log(req.params);
        var id = parseInt(req.params.id);
        db.collection('product').find({
            id: id
        }).toArray(function (err, result) {
            console.log(result);
            res.send(result);
        });
    });


    app.put('/api/product', function (req, res) {
        console.log(req.body);
        var id = parseInt(req.body.id);
        db.collection('product').updateOne({
            id: id
        }, {
            $set: {
                name: req.body.name,
                imageUrl: req.body.imageUrl,
                price: parseFloat(req.body.price)
            }
        }).then(function (result) {
            console.log(result);
            res.send(result);
        })
    });

    app.post('/api/product', function (req, res) {
        products.push(req.body);
        db.collection('product').insertOne(req.body).then(function (result) {
            res.send(result);
        });
    });

}