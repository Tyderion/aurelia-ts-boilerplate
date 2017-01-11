[![Build Status](https://api.travis-ci.org/w3tecch/aurelia-ts-boilerplate.svg?branch=master)](https://travis-ci.org/w3tecch/aurelia-ts-boilerplate)
[![Dependency Status](https://david-dm.org/w3tecch/aurelia-ts-boilerplate.svg)](https://david-dm.org/w3tecch/aurelia-ts-boilerplate)
[![devDependency Status](https://david-dm.org/w3tecch/aurelia-ts-boilerplate/dev-status.svg)](https://david-dm.org/w3tecch/aurelia-ts-boilerplate#info=devDependencies)

## Prerequisites

1. Install [NodeJS](https://nodejs.org/en/)
2. Open your Terminal and navigate to the project folder
3. To get all app prerequisites run ```$ npm install```

## Technologies

[aurelia](http://www.aurelia.io/)

## Getting started

Before you start, make sure you have a recent version of [NodeJS](http://nodejs.org/) environment *>=4.0* with NPM 3.

From the project folder, execute the following commands:

```shell
npm run install:dev
```

This will install all required dependencies, including a local version of Webpack that is going to
build and bundle the app. There is no need to install Webpack globally.

To run the app execute the following command:

```shell
npm start
```

This command starts the webpack development server that serves the build bundles.
You can now browse the skeleton app at http://localhost:9000. Changes in the code
will automatically build and reload the app.

## Feature configuration

Most of the configuration will happen in the `webpack.config.js` file.
There, you may configure advanced loader features or add direct SASS or LESS loading support.

## Bundling

To build a development bundle (output to /dist) execute:

```shell
npm run build
```

To build an optimized, minified production bundle (output to /dist) execute:

```shell
npm run build:prod
```

To test either the development or production build execute:

```shell
npm run server:prod
```

The production bundle includes all files that are required for deployment.

## Resource and bundling configuration

You may want to separate out parts of your code to other files.
This can be done by specifying a build resource object inside `package.json`.

For example, if you wanted to lazy-load the /users path of the skeleton you could define it as follows:

```js
// (package.json)
"aurelia": {
  "build": {
    "resources": [
      {
        "path": "users",
        "bundle": "users",
        "lazy": true
      }
    ]
  }
},
```

The "path" field can be either a string or an array of strings.
The string should be a path, relative to the src or in case of an external resource, as a require path (e.g. `aurelia-plugin/some-resource.html`).
`.js`, `.ts` and `.html` extensions are optional and will be resolved automatically.
The bundle setting is recursive, therefore any files required by the specified path will also be contained by the bundle, unless they are also contained by another one (iteration is done from first to last resource).

Resources must also be specified in case Aurelia is supposed to load an external file or an external module that was not defined as a resource by any of the dependencies.
Since the syntax is still relatively new, most Aurelia plugins don't define their resources.
There might also be reasons not to declare those resources, in case the plugin is to be consumed only partially.
If you'd like to use external resources, you should declare them yourself, like so:

```js
// (package.json)
"aurelia": {
  "build": {
    "resources": [
      "aurelia-some-ui-plugin/dropdown",
      "aurelia-some-ui-plugin/checkbox"
    ]
  }
},
```

You can also combine both features to separate out plugins or resources for lazy-loading:

```js
// (package.json)
"aurelia": {
  "build": {
    "resources": [
      {
        "path": "aurelia-animator-css",
        "bundle": "animator",
        "lazy": true
      },
      {
        "path": [
          // lets say we only use the checkbox from within subpage1
          // we want those to be bundled together in a bundle called: "subpage1"
          "aurelia-some-ui-plugin/checkbox",
          "./items/subpage1"
        ],
        "bundle": "subpage1",
        "lazy": true
      },
      "aurelia-some-ui-plugin/dropdown"
    ]
  }
},
```

Please see https://github.com/aurelia/webpack-plugin for more information.

## Running The Unit Tests

To run the unit tests:

```shell
npm test
```

## Environment confugration
There is a configuration management in place. Three standart environments are already set (devlopment, test and production).
You can also add more environments with ```--env.target <env-name>``` but there is a catch: You have to add ```--``` for each npm command you
run throw so if your like to set the evnirnment for ```npm start``` you have to do this like so:

  ```shell
  npm start -- -- -- --env.target <json-file-name-without-extension>
  ```

This because ```npm start``` runs ```npm run server:dev``` and then the target command, so we have to to pass the ```--env.target``` by providing two times ```--```.
You can find the configurations in ```<root>/environment```.

## HTML5 pushState routing
By default pushState, also known as html5 routing, is enabled. The Webpack server is already configured to handle this but many webserver need
extra confuration to enable this.

## Cordova - Mobile Development

### Installation
Initiate cordova with the following commands:
```shell
npm install -g cordova
npm run mobile:setup
```

### Run and build
Cordova takes the ```www``` folder source to create the Cordova app. This ```www``` folder is a symlink pointing to the ```dist``` folder.
So make sure you run for example ```npm run build``` first before runing/building a Cordova app.

Sometimes the ```www``` symlink is removed (e.g. git clone). Run this command to fix this:
``shell
npm run mobile:link
```

### Typedocs
Typedoc is generated with command ```npm run build:docs``` into directoy ```docs``` and can be served with ```npm run server:docs```.
> The typedoc are generated with the development environment

> As side effect a build into ```dist``` is produced as default behavior of webpack.


# ToDo's

- [X] Add typings
- [X] Remove bluebird
- [X] Update app structure
- [X] Add bootstrap sass
- [X] Add sass ignore for unit tests
- [X] Add linter
- [X] Add env mgmt
- [X] Add logging system
- [X] Animation
- [X] refactor webpack config
- [X] add i18n
- [X] Add cordova
- [X] Add travis
- [X] Add style guid
- [X] Add wallaby.js
- [X] Use karma electorn launcher
- [X] Add typedocs
- [ ] Add greenkeeper
- [ ] Add electron
- [X] Add pipline example
- [X] Add utility converters https://www.npmjs.com/package/aurelia-utility-converters
- [X] Add validation example
- [X] Add configure http client example
