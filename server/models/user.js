var mongoose = require('mongoose');

//Save new something
var User = mongoose.model('User', {
  text:{
   type: String,
   required: true,
   minlenght: 1,
   trim: true
  }
 
 });

 module.exports = {User};