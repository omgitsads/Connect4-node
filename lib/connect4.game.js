var sys = require('sys');

var Connect4Game = exports.Connect4Game = function(){
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

exports.create = function(){ return new Connect4Game(); }