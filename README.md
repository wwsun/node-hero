Node Hero
--------

> Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
 Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

## Node.js In a Nutshell

1. It is better to start using [nvm](https://github.com/creationix/nvm), the Node Version Manager. E.g. `nvm install 4.4`
2. Node.js 'hello world' in `src/ch1/hello-world.js`.
3. Using `npm init` to generate the `package.json`, or `npm init --yes`
4. Modularization of your application:

        |-- app
        |    |-- calc.js
        |    |__ index.js
        |
        |--- index.js
        |___ package.json

5. Keeping your root `index.js` simple, like:

    ```javascript
    // index.js
    require('./app/index.js');
    ```
6. Start building the actual application in `app/index.js`
7. Finish the actual business logic in `app/calc.js`

### Readings

- [Getting started with Node.js](https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/)
- [`module.exports = xxx;` vs `exports.xxx`](http://weizhifeng.net/node-js-exports-vs-module-exports.html)

## Using NPM

1. Visit the NPM website at [https://npmjs.com](https://npmjs.com), and sign up your account.
2. Make sure you install npm v3, or you can `npm install npm@3 -g`
3. Adding dependencies: `npm install lodash --save` or build-time dependencies `npm install babel --save-dev`
4. After `npm install`, it is better to `npm dedupe`
5. Using NPM scripts:

        "script": {
            "start": "node index.js",
            "test" "mocha test",
            "your-custom-script": "echno npm"
        }
5. Run your NPM scripts, via `npm start`, or `npm run test`
6. Using [scoped/private packages](https://docs.npmjs.com/misc/scope):
    - naming pattern: `@myorg/mypackage`
    - install: `npm install @myorg/mypackage --save`
    - requiring: `require('myorg/mypackage');`

### Readings

- [Getting started with NPM](https://blog.risingstack.com/node-hero-npm-tutorial/)
- [AlloyTeam: Master NPM](http://www.alloyteam.com/2016/03/master-npm/)
- [`dependencies` vs `devDependencies`](http://stackoverflow.com/questions/19339227/bower-and-devdependencies-vs-dependencies)
- [Taobao NPM](http://npm.taobao.org/)
- [Semantic version: Major.Mionor.Patch](http://semver.org/)