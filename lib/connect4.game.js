var Connect4Game = exports.Connect4Game = function(){
	this.players = [];
}

Connect4Game.prototype.addPlayer = function(player){
	this.players.push(player);
}


Connect4Game.prototype.redPlayer = function(){
	return this.players[0];
}