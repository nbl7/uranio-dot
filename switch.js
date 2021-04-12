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
		cp.execSync(`git submodule deinit ${current_submodule}`);
		cp.execSync(`git rm ${current_submodule}`);
		cp.execSync(`git commit -m "removed submodule ${current_submodule}"`);
		cp.execSync(`rm -rf ../.git/modules/urn-dot/modules/${current_submodule}`);
	}
}

const urn_repo = args._[0];
// const dest = args._[1] || args._[0];

cp.execSync(`git submodule add -b master git+ssh://git@bitbucket.org/nbl7/urn-${urn_repo} .uranio/${urn_repo})`);
cp.execSync(`git config -f .gitmodule submodule..uranio/${urn_repo}.update rebase`);
cp.execSync(`git submodule update --remote`);


