var sys = require('sys');

var Connect4Game = exports.Connect4Game = function(){
	this.players = [];
}
sys.inherits(Connect4Game, process.EventEmitter)

Connect4Game.prototype.addPlayer = function(player){
	this.players.push(player);
}

Connect4Game.prototype.redPlayer = function(){
	return this.players[0];
}

Connect4Game.prototype.yellowPlayer = function(){
	return this.players[1];
}