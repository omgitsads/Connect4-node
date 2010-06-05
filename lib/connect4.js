var sys = require('sys')
		Connect4Game = require('./connect4.game').Connect4Game;

var Connect4 = exports.Connect4 = function(){
	this.games = [];
}

Connect4.prototype.connect = function(player){
	var game = new Connect4Game();
	game.addPlayer(player);
	this.games.push(game);
}

exports.create = function(){ return new Connect4(); }