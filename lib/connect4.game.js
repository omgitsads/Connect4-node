var sys = require('sys');

function Connect4Game(){
	this.players = [];
}

Connect4Game.prototype.addPlayer = function(player,callback){
	this.players.push(player);
	if(callback != undefined){ callback(true); }
}

Connect4Game.prototype.redPlayer = function(){
	return this.players[0];
}

Connect4Game.prototype.yellowPlayer = function(){
	return this.players[1];
}

module.exports = Connect4Game;