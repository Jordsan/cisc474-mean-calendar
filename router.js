const testController = require('./controllers/test-controller'),
    express = require('express');

module.exports = function (app) {
    // Initializing route groups
    const apiRoutes = express.Router();

    apiRoutes.get('/test', testController.testGet);
    apiRoutes.get('/test/:testId', testController.testGetOne);
    apiRoutes.post('/test', testController.testPost);
    apiRoutes.delete('/test', testController.testDeleteAll);
    apiRoutes.put('/test/:testId', testController.testUpdate);

    app.use('/', apiRoutes);
};