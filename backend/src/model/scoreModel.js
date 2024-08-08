const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
    teamName : {
        type : String,
        trim : true
    },
    score : {
        type : Number,
    },
    match : {
        type : String,
        trim : true
    },
    sportType : {
        type : String,
        lowercase : true
    },
    isDeleted: {
        type : Boolean,
        default : false
    }
    
},{timestamps : true})

module.exports = mongoose.model('Score',scoreSchema)