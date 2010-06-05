
require.paths.unshift('spec', '/Users/adamholt/.rvm/gems/ruby-1.8.7-p249/gems/jspec-4.3.2/lib', 'lib')
require('jspec')
require('unit/spec.helper')
connect4 = require('connect4').Connect4

JSpec
  .exec('spec/unit/connect4.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report()
