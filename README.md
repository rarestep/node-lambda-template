# node-lambda-template

The bare minimum for a node.js app running on [Amazon Lambda](http://aws.amazon.com/lambda/). Forked from [node-lambda-template](https://github.com/motdotla/node-lambda-template).

It uses [node-lambda](https://github.com/motdotla/node-lambda) under the hood to locally run and also deploy your node.js Amazon Lambda application.

This custom template also includes Gulp tasks so you can write Lambda functions in Coffeescript and compile them to JavaScript, which is was the AWS Lamdbda runtime expects.

## Install

1. Clone this repository:

```
cd /to/your/template/path
npm install
npm run setup # setup node-lambda files
```

## Usage

#### Compiling

This project uses Gulp to compile CoffeeScript files in `/src` to JS files, which is what Amazon Lambda expects.

Auto-compile:
```
gulp watch
```

Manually compile:
```
gulp compile
```

#### Running locally

```
$ gulp run
```

`event.json` is where you mock the event for local development.

#### Deploying

```
$ gulp deploy
```

`.env` is where you place your deployment configuration.

There are 4 available commands to use on this template. For more info and usage descriptions, see the [node-lambda](https://github.com/motdotla/node-lambda) repository.

```
cd /to/your/template/path
npm run setup # setup node-lambda files
npm run test # test your event handler and check output
npm run package # just generate the zip that would be uploaded to AWS
npm run deploy # deploy to AWS
```
