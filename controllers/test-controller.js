var TestModel = require('../models/test');

exports.testGet = function (req, res, next) {
    TestModel.find({}, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
}

exports.testGetOne = function (req, res, next) {
    TestModel.findOne({ 'testId': req.params.testId }, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
}

exports.testPost = function (req, res, next) {
    let myTestObj = new TestModel({
        testId: req.body.testId,
        data: req.body.data
    })

    myTestObj.save(function (err, obj) {
        if (err) return console.error(err);

        res.status(201).json({
            created: myTestObj.toJson()
        });
    });
}

exports.testDeleteAll = function (req, res, next) {
    TestModel.remove({}, function (err) {
        if (err) return console.error(err);

        res.status(200).json();
    });
}

exports.testUpdate = function (req, res, next) {
    TestModel.findOneAndUpdate({ 'testId': req.params.testId }, req.body, function (err) {
        if (err) return console.error(err);

        let myTestObj = new TestModel({
            testId: req.body.testId,
            data: req.body.data
        })

        res.status(201).json({
            updated: myTestObj.toJson()
        });
    });
}