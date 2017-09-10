var dbLogger = function (req, res, next) {
    if (req.method === 'GET') {
            console.log(req.params);
    }
    if (req.method === 'POST') {
        console.log(req.body);
    }

    next();
}
module.exports = dbLogger;