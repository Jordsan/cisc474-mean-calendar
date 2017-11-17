//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const TestSchema = mongoose.Schema({
    testId: {
        type: Number,
        required: true
    },
    data: {
        type: String,
        required: true
    }
});


TestSchema.methods.toJson = function () {
    return {
        testId: this.testId,
        data: this.data
    }
}

module.exports = mongoose.model('TestModel', TestSchema);



/*
const TestSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true,
        enum: ['High', 'Medium', 'Low']
    }
});
*/