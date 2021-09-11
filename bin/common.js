"use strict";

const cp = require('child_process');

export function deinit(submodule_path){
	execute(`git submodule deinit ${submodule_path}`);
	execute(`git rm ${submodule_path}`);
	execute(`rm -rf ${submodule_path}`);
	execute(`rm -rf ../.git/modules/urn-dot/modules/${submodule_path}`);
	execute('git add .');
	execute(`git commit -m "[removed submodule ${submodule_path}]"`);
}

export function add_submodule(origin, submodule_path, branch='master'){
	execute(`git submodule add -b ${branch} ${origin} ${submodule_path}`);
	execute(`git config -f .gitmodules submodule.${submodule_path}.update rebase`);
	execute(`git submodule foreach --recursive 'case $displaypath in ".uranio"*) git checkout ${branch} ;; *) : ;; esac'`);
}

export function execute(command){
	console.log(command);
	cp.execSync(command);
}

