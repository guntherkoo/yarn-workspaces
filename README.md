# Yarn Workspaces + Component Library in Storybook

This is a yarn workspace built with lerna.js supporting a component library built in Storybook

### Install
```
yarn install
```
### Running ui-common library
```
npm run common
```

### Test
```
npm run test
```

#### Publish and commit to new version of packages
This will update each package version if changes are made
```
npm run new-version
```


### Troubleshoot
If running into long install issue, try using Node version 10.16.3
```
nvm use 10.16.3
```