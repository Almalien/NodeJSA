var mongoose = require('mongoose');

   var Schema   = mongoose.Schema;

var gameSchema = new Schema({
  name:    { type: String },
  year:     { type: Number },
  country:  { type: String },
  genre:    { type: String, enum:
  ['FPS', 'Action', 'Adventure', 'Action-Adventure', 'Simulation','Strategy','Sports','MMO']
	    },
  summary:  { type: String }
});

module.exports = mongoose.model('Game', gameSchema);