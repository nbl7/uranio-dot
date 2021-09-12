### How to develop urn-dot

URN-DOT repository allows to develop and test URN modules like urn-core, urn-api, etc.


Every submodule is installed in the `.uranio` folder.


The `switch.js` file will install or replace submodules. The command to switch submodule is:

```
node bin/switch core
node bin/switch api
...
```
It can be also selected the branch to download:

```
node bin/switch trx <branch>
```

Other scripts are available to remove or add submodule:
```
node bin/add trx
node bin/remove trx
```

`switch.js` will make commits every time it replaces or install a new submodule. Therefore always commit before using it.
