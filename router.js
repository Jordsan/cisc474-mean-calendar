const eventController = require('./controllers/event-controller');
const express = require('express');

module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router();

    apiRoutes.get('/events', eventController.getAll);
    apiRoutes.get('/events/:eventId', eventController.getOne);

    apiRoutes.get('/:userId/events', eventController.getAllUserEvents);
    apiRoutes.get('/:userId/events/date/:date', eventController.getUserDateEvents);
    apiRoutes.get('/:userId/events/month/:month', eventController.getUserMonthEvents);

    apiRoutes.post('/events', eventController.createEvent);

    apiRoutes.put('/events/:eventId', eventController.updateEvent);

    apiRoutes.delete('/events/:eventId', eventController.deleteEvent);
    apiRoutes.delete('/events', eventController.deleteAll);

    app.use('/', apiRoutes);
};