var vows = require('vows'), 
  assert = require('assert'),
  Connect4Game = require('../../lib/connect4.game');
  
vows.describe('Connect4Game').addBatch({
  "A Connect4Game": {
    ".addPlayer()": {
      topic: function(){ 
        var g = new Connect4Game();
        g.addPlayer({username: "omgitsads"}, this.callback)
      },
      
      "connect sucessfully": function(connected){
        assert.isTrue(connected);
      }
    },
    
    "with no players": {
      topic: new Connect4Game(),
      
      "has no players": function(topic){
        assert.length(topic.players, 0);
      },
      
      "adding a player": {
        "the player is the red player": function(topic){
          topic.addPlayer({username: "omgitsads"});
          assert.equal(topic.redPlayer().username, "omgitsads");
        }
      }
    },
    "with one player": {
      topic: function(){
        var g = new Connect4Game();
        g.addPlayer({username: "defaultPlayer"});
        return g;
      },
      
      "has one player": function(topic){
        assert.length(topic.players, 1);
      },
      
      "the first player is the red player": function(topic){
        assert.equal(topic.redPlayer().username, "defaultPlayer");
      },
      
      "adding a player": {
        "the player is the yellow player": function(topic){
          topic.addPlayer({username: "omgitsads"});
          assert.equal(topic.yellowPlayer().username, "omgitsads");
        }
      }
    }
  }
}).export(module);