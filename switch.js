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
		_execute(`git submodule deinit .uranio/repo`);
		_execute(`git rm .uranio/repo`);
		_execute(`rm -rf .uranio/repo`);
		_execute(`rm -rf ../.git/modules/urn-dot/modules/.uranio/repo`);
		_execute('git add .');
		_execute(`git commit -m "[removed submodule ${current_submodule}]"`);
	}
}else{
	_execute(`touch ${json_filepath}`);
}

const selected_repo = args._[0];
// const dest = args._[1] || args._[0];

const origin = `git+ssh://git@bitbucket.org/nbl7/urn-${selected_repo}`;

_execute(`git submodule add -b master ${origin} .uranio/repo`);
_execute(`git config -f .gitmodules submodule..uranio/repo.update rebase`);
_execute(`git submodule update --remote --init --recursive`);
// _execute(`git submodule update --remote`);

const urnsub = {submodule: `${selected_repo}`};
fs.writeFileSync(json_filepath, JSON.stringify(urnsub) + '\n');

_execute('git add .');
_execute(`git commit -m "[added submodule ${selected_repo}]"`);

function _execute(command){
	console.log(command);
	
	cp.execSync(command);
	
}
