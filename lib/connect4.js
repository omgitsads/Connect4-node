var sys = require('sys')
		Connect4Game = require('./connect4.game').Connect4Game;

var Connect4 = exports.Connect4 = function(){
	this.games = [];
}
sys.inherits(Connect4, process.EventEmitter)

Connect4.prototype.connect = function(player){
	if(this.games.length == 1){
		var game = this.games[0];
		game.addPlayer(player)
	} else {
		var game = new Connect4Game();
		game.addPlayer(player);
		this.games.push(game);
	}
}

exports.create = function(){ return new Connect4(); }