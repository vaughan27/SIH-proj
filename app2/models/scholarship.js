const { truncate } = require('fs');
const mongoose = require('mongoose');
const { stringify } = require('querystring');

const scholarshipSchema= new mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    deadline:{
        type:Date,
        required:true,
        min:0
    },
    category:{
        type: String,
        enum: ['Scholarships for Women', 'SC/ST/OBC','Open to all','Others']
    },
    educationLevel:{
        type: String,
        enum: ['Metric', 'Diploma','Undergraduate','Masters','PhD','PostDoc','Open to all','Others']
    },
    areaofStudy:{
        type: String,
        enum: ['Computer Science','Mechanical Engineering','Open to all','Others']
    },
    type:{
        type: String,
        enum: ['Merit-Based', 'Means-Based','Fellowships','Zero Interst Loans','Fully funded scholarships','Others']
    },
    location:{
        type: String,
        enum: ['Within India', 'Abroad','Others']
    },
    funding:{
        type: String,
        enum: ['Government', 'Private','Others']
    },



})

const Scholarship_S= mongoose.model('scholarship',scholarshipSchema);

module.exports=Scholarship_S;