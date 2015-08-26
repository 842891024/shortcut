#!/usr/bin/env node
var program = require('commander');
var exec = require('child_process').execFile;
var colors = require('colors');

var workpath = __dirname;


program.on('--help',function(){
	console.log( '    Examples:'.bold.green+'\n'
		  		+'    q  '.bold.green+'--'+'  QQ'.bold.yellow+'\n'
		  		+'    p  '.bold.green+'--'+'  PS'.bold.yellow+'\n'
		  		+'    s  '.bold.green+'--'+'  Sublime'.bold.yellow+'\n'
		  		+'    w  '.bold.green+'--'+'  Wamp'.bold.yellow+'\n'
		  		+'    j  '.bold.green+'--'+'  360极速浏览器'.bold.yellow+'\n'
		 		+'    c  '.bold.green+'--'+'  Chrome'.bold.yellow+'\n'
		  		+'    i  '.bold.green+'--'+'  Safair'.bold.yellow+'\n'
		  		+'    f  '.bold.green+'--'+'  Fire Fox'.bold.yellow+'\n'
		  		+'    r  '.bold.green+'--'+'  Rename'.bold.yellow+'\n'
		  		+'    e  '.bold.green+'--'+'  Evernote'.bold.yellow+'\n');
});



program
	.command('q')
	.action(function(){
		exec(workpath+"/bin/qq.bat")
	})

program
	.command('p')
	.action(function(){
		exec(workpath+"/bin/ps.bat")
	})
program
	.command('s')
	.action(function(){
		exec(workpath+"/bin/sublime.bat")
	})
program
	.command('w')
	.action(function(){
		exec(workpath+"/bin/wamp.bat")
	})
program
	.command('j')
	.action(function(){
		exec(workpath+"/bin/jisu.bat")
	})
program
	.command('c')
	.action(function(){
		exec(workpath+"/bin/chrome.bat")
	})
program
	.command('i')
	.action(function(){
		exec(workpath+"/bin/safair.bat")
	})
program
	.command('f')
	.action(function(){
		exec(workpath+"/bin/fire.bat")
	})
program
	.command('r')
	.action(function(){
		exec(workpath+"/bin/rename.bat")
	})
program
	.command('e')
	.action(function(){
		exec(workpath+"/bin/evernote.bat")
	})

program
	.command('a')
	.action(function(){
		exec(workpath+"/bin/qq.bat")
		exec(workpath+"/bin/ps.bat")
		exec(workpath+"/bin/sublime.bat")
		exec(workpath+"/bin/wamp.bat")
		exec(workpath+"/bin/jisu.bat")
	})



//执行
program.parse(process.argv);