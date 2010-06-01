
require.paths.unshift('spec', '/Users/adamholt/.rvm/gems/ruby-1.8.7-p249/gems/jspec-4.2.1/lib', 'lib')
require('jspec')
require('unit/spec.helper')
require('yourlib')

JSpec
  .exec('spec/unit/spec.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report()
