#!/usr/bin/env node
"use strict";

const minimist = require('minimist');
const cp = require('child_process');
const fs = require('fs');

const args = minimist(process.argv.slice(2));

const json_filepath = `urnsub.json`;

if(fs.existsSync(json_filepath)){
	const content = fs.readFileSync(json_filepath, {encoding: 'utf8'});
	const urnsub = JSON.parse(content);
	const current_submodule = urnsub.submodule;
	if(typeof current_submodule === 'string'){
		_spawn(`git submodule deinit ${current_submodule}`);
		_spawn(`git rm ${current_submodule}`);
		_spawn(`rm -rf ${current_submodule}`);
		_spawn('git add .');
		_spawn(`git commit -m "[removed submodule ${current_submodule}]"`);
		_spawn(`rm -rf ../.git/modules/urn-dot/modules/${current_submodule}`);
	}
}else{
	_spawn(`touch ${json_filepath}`);
}

const urn_repo = args._[0];
// const dest = args._[1] || args._[0];

_spawn(`git submodule add -b master git+ssh://git@bitbucket.org/nbl7/urn-${urn_repo} .uranio/${urn_repo}`);
_spawn(`git config -f .gitmodules submodule..uranio/${urn_repo}.update rebase`);
_spawn(`git submodule update --remote`);

_spawn('git add .');
_spawn(`git commit -m "[added submodule ${urn_repo}]"`);

const urnsub = {submodule: `.uranio/${urn_repo}`};
fs.writeFileSync(json_filepath, JSON.stringify(urnsub));

function _spawn(command){
	console.log(command);
	const splitted = command.split(' ');
	const first_cmd = splitted[0];
	splitted.shift();
	const child = cp.spawn(first_cmd, splitted);
	
	if(child.stdout){
		child.stdout.setEncoding('utf8');
		child.stdout.on('data', (chunk) => {
			console.log(chunk);
		});
	}
	
	if(child.stderr){
		child.stderr.setEncoding('utf8');
		child.stderr.on('data', (chunk) => {
			console.log(chunk);
		});
	}
	
	child.on('error', (err) => {
		console.error(err);
	});

}
