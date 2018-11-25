var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Recipe = db.model('Recipe', {
  name: String,
  Calorie: String,
  time: String,
  description: String,
  _assignedto: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: [ {ki: String }]
});

module.exports = Recipe;
