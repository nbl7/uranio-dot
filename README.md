# Deprecated

**This repository is deprecated and no longer maintained.**

Please use the new repository for the latest code and updates:  
[https://github.com/x71c9/uranio](https://github.com/x71c9/uranio)

### How to develop on urn-dot

In order to switch URANIO repo you must use a `uranio` cli command:

```
uranio dot switch [repo] [pacman] [deploy] [branch]
```

For example if you want to develop URANIO trx on express
```
uranio dot switch trx yarn express
```

You can also use this syntax:
```
uranio dot switch --repo=trx --pacman=yarn --deploy=express
```

The default values are:
```
pacman=npm
deploy=express
branch=master
```

So you can also use:
```
uranio dot switch trx
```

The command will:
· Checkout the branch corrisponding to the repo.
· Commit the previous submodule src/uranio.
· Deinit the previous submodule
· Add the correct submodule for the repo.
· Commit the added submodule.
· Run `uranio init` with the provided parameters.

If you ended up in a corrupted repo:
```
git checkout master
git reset --hard
git add .
git commit -m "changed submodule src/uranio"
uranio dot switch [repo]
```


#### KNOWN ISSUES FOR URANIO ADM

SOLVED:

The problem was that ts-loader 9 doesn't work with webpack 4 (used by Nuxt)
In order to make it work we need to use `ts-loader@8.2.0`

--

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

#### OLDER METHOD

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


