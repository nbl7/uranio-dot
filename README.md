### How to develop urn-dot

URN-DOT repository allows to develop and test URN modules like urn-core, urn-api, etc.


Every submodule will be installed in the `src/uranio` folder.

In order to switch module use the binary `bin/switch.js`.

The command to switch submodule is:
```
node bin/switch core
node bin/switch api
...
```
In order to select the branch (default is `master`) use:
```
node bin/switch trx <branch>
```

Other scripts are available to remove or add submodule:
```
node bin/add trx
node bin/remove adm
```

`bin/switch.js` will make commits every time it replaces or install a new submodule.
Therefore always commit before using it.

Remember to run `uranio init` after a submodule is changed.
