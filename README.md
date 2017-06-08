# node-lambda-template

The bare minimum for a node.js app running on [Amazon Lambda](http://aws.amazon.com/lambda/). Forked from [node-lambda-template](https://github.com/motdotla/node-lambda-template).

It uses [node-lambda](https://github.com/motdotla/node-lambda) under the hood to locally run and also deploy your node.js Amazon Lambda application.

## Install

1. ~~Clone~~ Download this repository to your local machine:

```
cd /to/your/template/path
npm install
```

## Usage

There are 4 available commands to use on this template. For more info and usage descriptions, see the [node-lambda](https://github.com/motdotla/node-lambda) repository.

```
cd /to/your/template/path
npm run setup # setup node-lambda files
npm run test # test your event handler and check output
npm run package # just generate the zip that would be uploaded to AWS
npm run deploy # deploy to AWS
```
