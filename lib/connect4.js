var sys = require('sys');

function Connect4() {
	this.games = {}
	this.players = {}
}

exports.create = function() {
	return new Connect4();
}

Connect4.prototype.connect = function(socket) {
	
}

Connect4.prototype.disconnect = function(socket) {
	
}