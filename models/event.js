const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var movieSchema = new Schema({
    UserId:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    time:String,
    date:Date,
    location:String,
    description:String
  },{
    timestamps: true
  });
var movie = mongoose.model('event', movieSchema);
module.exports = movie;