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
		_execute(`git submodule deinit ${current_submodule}`);
		_execute(`git rm ${current_submodule}`);
		_execute(`rm -rf ${current_submodule}`);
		_execute(`rm -rf ../.git/modules/urn-dot/modules/${current_submodule}`);
		_execute('git add .');
		_execute(`git commit -m "[removed submodule ${current_submodule}]"`);
	}
}else{
	_execute(`touch ${json_filepath}`);
}

const urn_repo = args._[0];
// const dest = args._[1] || args._[0];

_execute(`git submodule add -b master git+ssh://git@bitbucket.org/nbl7/urn-${urn_repo} .uranio/${urn_repo}`);
_execute(`git config -f .gitmodules submodule..uranio/${urn_repo}.update rebase`);
_execute(`git submodule update --remote`);

const urnsub = {submodule: `.uranio/${urn_repo}`};
fs.writeFileSync(json_filepath, JSON.stringify(urnsub));

_execute('git add .');
_execute(`git commit -m "[added submodule ${urn_repo}]"`);

function _execute(command){
	console.log(command);
	
	cp.execSync(command);
	
}
