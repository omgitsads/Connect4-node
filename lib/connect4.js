var sys = require('sys')

function Connect4() {
	this.games = {}
	this.players = {}
}

exports.create = function() {
	return new Connect4();
}