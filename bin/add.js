#!/usr/bin/env node
"use strict";

const minimist = require('minimist');
const fs = require('fs');
const {execute} = require('./common');

const repo_folder_name = 'uranio';

_proceed();

function _proceed(){
	
	const args = minimist(process.argv.slice(2));
	const selected_repo = args._[0];
	const valid_repos = ['core', 'api', 'trx'];
	
	const selected_branch = args._[1] || 'master';
	
	if(!valid_repos.includes(selected_repo)){
		console.log('Invalid repo argument.');
		process.exit(1);
	}
	
	const json_filepath = `urnsub.json`;
	
	const submodule_path = `.uranio/server/src/${repo_folder_name}`;
	
	if(!fs.existsSync(json_filepath)){
		execute(`touch ${json_filepath}`);
	}
	
	const origin = `git+ssh://git@bitbucket.org/nbl7/urn-${selected_repo}`;
	
	_add_submodule(origin, submodule_path, selected_branch);
	execute(`git submodule update --remote --init --recursive`);
	
	const urnsub = {submodule: `${selected_repo}`};
	fs.writeFileSync(json_filepath, JSON.stringify(urnsub) + '\n');
	
	execute('git add .');
	execute(`git commit -m "[added submodules ${selected_repo}]"`);
	
}

function _add_submodule(origin, submodule_path, branch='master'){
	
	execute(`git submodule add -b ${branch} ${origin} ${submodule_path}`);
	execute(`git config -f .gitmodules submodule.${submodule_path}.update rebase`);
	
	execute(`git submodule foreach --recursive 'case $displaypath in ".uranio"*) git checkout ${branch} ;; *) : ;; esac'`);
	
}

