
var mongoose = require('mongoose');

//Save new something
var Todo = mongoose.model('Todo', {
  text:{
   type: String,
   required: true,
   minlenght: 1,
   trim: true
  },
 
  completed:{
   type: Boolean,
   default: false
  },
 
  completedAt:{
   type: Number,
   default: null
  },
  email:{
     type: String,
     required: true,
     trim: true,
     minlength: 1,
     default: true
  }
 
 });

 module.exports = {Todo};

