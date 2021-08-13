#!/usr/bin/env node
"use strict";

const minimist = require('minimist');
const cp = require('child_process');
const fs = require('fs');

const output = cp.execSync(`git status --porcelain`).toString();
const repo_folder_name = 'lib';

if(output === ''){
	console.log('Working directory clean.');
	_proceed();
}else{
	console.log('-------------------------------------------------------------');
	console.log('Working directory not clean. Please commit before proceeding.');
	console.log('-------------------------------------------------------------');
}

function _proceed(){
	
	const args = minimist(process.argv.slice(2));
	const selected_repo = args._[0];
	const valid_repos = ['core', 'api', 'trx'];
	
	if(!valid_repos.includes(selected_repo)){
		console.log('Invalid repo argument.');
		process.exit(1);
	}
	
	const json_filepath = `urnsub.json`;
	
	if(fs.existsSync(json_filepath)){
		const content = fs.readFileSync(json_filepath, {encoding: 'utf8'});
		const urnsub = JSON.parse(content);
		const current_submodule = urnsub.submodule;
		if(typeof current_submodule === 'string' && fs.existsSync(`.uranio/${repo_folder_name}`)){
			_execute(`git submodule deinit .uranio/${repo_folder_name}`);
			_execute(`git rm .uranio/${repo_folder_name}`);
			_execute(`rm -rf .uranio/${repo_folder_name}`);
			_execute(`rm -rf ../.git/modules/urn-dot/modules/.uranio/${repo_folder_name}`);
			_execute('git add .');
			_execute(`git commit -m "[removed submodule ${current_submodule}]"`);
		}
	}else{
		_execute(`touch ${json_filepath}`);
	}
	
	const origin = `git+ssh://git@bitbucket.org/nbl7/urn-${selected_repo}`;
	
	_execute(`git submodule add -b master ${origin} .uranio/${repo_folder_name}`);
	_execute(`git config -f .gitmodules submodule..uranio/${repo_folder_name}.update rebase`);
	_execute(`git submodule update --remote --init --recursive`);
	
	_execute(`git submodule foreach --recursive git checkout master`);
	
	// if(selected_repo === 'api' || selected_repo === 'ntl'){
	//   _execute(`cd .uranio/lib/core/`);
	//   _execute(`git checkout master`);
	//   _execute(`cd ../../../`);
	// }
	
	const urnsub = {submodule: `${selected_repo}`};
	fs.writeFileSync(json_filepath, JSON.stringify(urnsub) + '\n');
	
	_execute('git add .');
	_execute(`git commit -m "[added submodule ${selected_repo}]"`);
	
}

function _execute(command){
	console.log(command);
	cp.execSync(command);
}
