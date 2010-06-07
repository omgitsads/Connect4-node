describe 'Connect4'
	before_each
		connect4 = require('connect4').create();
	end
	
  describe '.connect()'
		describe 'with no players'
			before_each
				connect4.connect({username: "TestUser"});
			end
			
			it 'should start a new game'
				connect4.should.have 1, 'games'
			end
			
			it 'should register the user with a game'
				connect4.games[0].should.have 1, 'players'
				connect4.games[0].players[0].username.should.be "TestUser"
			end
			
			it 'should register the user as the Red player'
			  connect4.games[0].redPlayer().username.should.be "TestUser"
			end
			
			it 'should tell user that they are connected'
			  // Pending
			end
		end
		
		describe 'with one player'
			before_each
				connect4.connect({username: "ExistingUser"})
				connect4.connect({username: "TestUser"})
			end
			
		  it 'should add player to existing game'
		    connect4.should.have 1, 'games'
		  end
		
			it 'should register the user with the game'
			  connect4.games[0].should.have 2, 'players'
			end
			
			it 'should register the user as the Yellow player'
			  connect4.games[0].yellowPlayer().username.should.be "TestUser"
			end
			
			it 'should tell the user that it is connected'
			  // Pending
			end
			
			it 'should start the game'
			  // Pending
			end
			
			it 'should prompt the Red player for their move'
			  // Pending
			end
		end
		
		describe 'with two players'
		  it 'should start a new game'
		    // Pending
		  end
		
			it 'should register the user with the game'
			  // Pending
			end
			
			it 'should register the first use as the Red player'
			  // Pending
			end
			
			it 'should tell the user this they are connected'
			  
			end
		end
  end
end