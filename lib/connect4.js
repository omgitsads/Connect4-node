var sys = require('sys')
    connect4Game = require('./connect4.game');

function Connect4(){
  this.games = [];
}

Connect4.prototype.connect = function(player){
  if(this.games.length == 1){
    var game = this.games[0];
    game.addPlayer(player)
  } else {
    var game = connect4Game.create();
    game.addPlayer(player);
    this.games.push(game);
  }
}

exports.create = function(){ return new Connect4(); }

module.exports = Connect4;