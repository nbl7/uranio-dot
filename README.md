### How to develop on urn-dot

URN-DOT repository allows to develop URANIO repo like urn-core, urn-api, etc.

This repository has different branches for each URANIO repo.
Each of the repos: `core`, `api`, `trx` and `adm` can be found in the corresponding branch.

When switching branches remember to:
- delete `node_modules` folder
- delete `yarn.pack` or `package-lock.json`
- run `yarn install` or `npm install`
- run `uranio init`

The best way to switch between URANIO repos is by using the script:
```
node bin/switch.js [repo] [pacman]
```
For example:
```
node bin/switch.js adm npm
node bin/switch.js api yarn
```


#### KNOWN ISSUES FOR URANIO ADM

I encountered problems with Nuxt 2 when installing dependecies.

Apparently by running:
```
yarn install
```
Nuxt will fail working. It will give error on module loading. Probably related with ts-loader or webpack.

I manage to make it work with:
```
npm install
```


#### OLD METHOD

Every submodule will be installed in the `src/uranio` folder.

In order to switch module use the binary `bin/replace.js`.

The command to switch submodule is:
```
node bin/repalce core
node bin/repalce api
...
```
In order to select the branch (default is `master`) use:
```
node bin/repalce trx <branch>
```

Other scripts are available to remove or add submodule:
```
node bin/add trx
node bin/remove adm
```

`bin/repalce.js` will make commits every time it replaces or install a new submodule.
Therefore always commit before using it.

Remember to run `uranio init` after a submodule is changed.


