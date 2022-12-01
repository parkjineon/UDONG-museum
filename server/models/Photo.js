const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const secretToken = 'secretToken'

function getCurrentDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();

    return new Date(Date.UTC(year, month, today));
}

const PhotoSchema = mongoose.Schema({
    user: {
        type: String
    },
    title: {
        type: String
    },
    date: {
        type: Date,
        default: getCurrentDate()
    },
    description:{
        type: String
    },
    img:{
        type: String
    },
    exhibition:{
        type: String
    },
    used: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

PhotoSchema.statics.findByToken = function(token, cb){
    var Photo = this
    jwt.verify(token,secretToken,function(err, decoded){
        Photo.find({"user": decoded}, function(err,Photos){
            if(err) return cb(err);
            cb(null,Photos)
        })
    })  
}

const Photo = mongoose.model('Photo', PhotoSchema);
module.exports = { Photo }