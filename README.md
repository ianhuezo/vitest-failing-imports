# vitest-failing-imports

to see the failure use:
```
npm run test
```
change node_modules package.json in the @esm-bundle/chai to have the main keyword change to this: "main": "esm/chai.js", and run the test again.
