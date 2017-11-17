var EventModel = require('../models/event');

exports.getAll = function (req, res, next) {
    EventModel.find({}, function (err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });
}

exports.getOne = function (req, res, next) {
    EventModel.findOne({ 'eventId': req.params.eventId }, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
}

exports.getAllUserEvents = function (req, res, next) {
    EventModel.find({ 'userId': req.params.userId }, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
}

exports.getUserDateEvents = function (req, res, next) {
    EventModel.find({ 'date': req.params.date, 'userId': req.params.userId }, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
}

exports.getUserMonthEvents = function (req, res, next) {
    EventModel.find({ 'month': req.params.month, 'userId': req.params.userId}, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
}

exports.createEvent = function (req, res, next) {
    let splitDate = (req.body.date).split("-");
    let year = splitDate[2];
    let month = splitDate[0];
    let day = splitDate[1];

    let tempEvent = new EventModel({
        eventId: req.body.eventId,
        userId: req.body.userId,
        date: req.body.date,
        year: year,
        month: month,
        day: day,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        title: req.body.title,
        description: req.body.description
    })

    tempEvent.save(function (err, obj) {
        if (err) return console.error(err);

        res.status(201).json({
            created: tempEvent.toJson()
        });
    });
}

exports.deleteEvent = function (req, res, next) {
    EventModel.remove({ 'eventId': req.params.eventId }, function (err) {
        if (err) return console.error(err);

        res.status(200).json();
    });
}

exports.deleteAll = function (req, res, next) {
    EventModel.remove({}, function (err) {
        if (err) return console.error(err);

        res.status(200).json();
    });
}

exports.updateEvent = function (req, res, next) {
    let splitDate = (req.body.date).split("-");
    let year = splitDate[2];
    let month = splitDate[0];
    let day = splitDate[1];

    EventModel.findOneAndUpdate({ 'eventId': req.params.eventId }, {
        eventId: req.body.eventId,
        userId: req.body.userId,
        date: req.body.date,
        year: year,
        month: month,
        day: day,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        title: req.body.title,
        description: req.body.description
    }, function (err) {
        if (err) return console.error(err);

        res.status(201).json({
            updated: tempEvent.toJson()
        });
    });
}