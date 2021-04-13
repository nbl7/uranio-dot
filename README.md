### How to develop urn-dot

URN-DOT repository allows to develop and test URN modules like urn-core, urn-web, etc.


Every submodule is installed in the `.uranio` folder.


The `switch.js` file will install or replace a submodule. The command to switch submodule is:

```
node switch.js core
node switch.js web
...
```

`switch.js` will make commits every time it replaces or install a new submodule. Therefore always commit before using it.
