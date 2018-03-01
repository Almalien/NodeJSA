var mongoose = require('mongoose');
var Game  = mongoose.model('Game');

//GET - Return all 
exports.findAllGames = function(req, res) {
	Game.find(function(err, games) {
    if(err) res.send(500, err.message);

    console.log('GET /games')
		res.status(200).jsonp(games);
	});
};