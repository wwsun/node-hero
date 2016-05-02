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

## Async Programming in Node.js

> Asynchronous I/O is a form of input/output processing that permits other
processing to continue before the transmission has finished.

1. Read file sync: `fs.readFileSync('file.md', 'utf-8')`
2. Using error-first callbacks: pass a function to another function as a parameter, you can call it within the function when you are
finished with your job. (**no return value**)
    - **error-handing:** instead of a `try-catch` block you have to check for errors in the callback
    - **no return value:** async functions don't return values, but values will be passed to the callbacks
3. Meet the [event loop](), which is the heart of Node.js/JavaScript - if is responsible for scheduling asynchronous operations.
4. Async control flow, which is a way to organize your codes.
    - Opt 1: [async.js](https://github.com/caolan/async)
    - Opt 2: Promises - the Promise object is used for deferred and asynchronous computations.
        A Promise represents an operation that hasn't completed yet but is expected in the future.
    - See Promise codes in `src/ch3/file-async-promise.js`

### Readings

- [Understanding Async Programming in Node.js](https://blog.risingstack.com/node-hero-async-programming-in-node-js/)
- [Sync vs Async](http://www.infoq.com/cn/articles/nodejs-asynchronous-io/)
- [Higher-order functions](https://blog.risingstack.com/functional-ui-and-components-as-higher-order-functions/)

## Simple Node.js Server

1. Getting to know `http` and `https` module, see [docs](https://nodejs.org/dist/latest-v4.x/docs/api/http.html)
2. Writing a simple server: `src/ch4/server.js`
3. The `http` module is very low-level, there are a lot of advanced frameworks to pick:
    - [express](http://expressjs.com/)
    - [hapi](http://hapijs.com/)
    - [koa](http://koajs.com/)
    - [restify](http://restify.com/)
4. Getting started with Express: `src/ch4/express-server.js`
    - By default, Express gives you a router. see [API docs](http://expressjs.com/en/4x/api.html)
    - Express app routing: `app.get`, `app.post`, `app.put`
5. Getting to know middlewares (as Unix pipelines, but for HTTP requests):
    - Define Express middleware: `app.use((req, res, next) => { do something })`
    - Error handling in Express: using a special middleware function
        - it should be the last middleware added with `app.use`
6. Rendering HTML:
    - using [handlebars](https://blog.risingstack.com/your-first-node-js-http-server/handlebarsjs.com) package with the [express-handlebars](https://www.npmjs.com/package/express-handlebars) wrapper.
    - checking [express-handlebars docs](https://www.npmjs.com/package/express-handlebars)
7. Debugging Express:
    - Pass the environment variable to Express: `DEBUG=express*`, like `$ DEBUG=express* node index.js`

### Reading

- [Creat a simple HTTP server](https://blog.risingstack.com/your-first-node-js-http-server/)
- [Middlewares]()
