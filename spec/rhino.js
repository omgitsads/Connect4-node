
load('/Users/adamholt/.rvm/gems/ruby-1.8.7-p249/gems/jspec-4.2.1/lib/jspec.js')
load('/Users/adamholt/.rvm/gems/ruby-1.8.7-p249/gems/jspec-4.2.1/lib/jspec.xhr.js')
load('lib/connect4.js')
load('spec/unit/spec.helper.js')

JSpec
	.exec('spec/unit/connect4.js')
	.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
	.report()