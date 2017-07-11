# node-lambda-template

The bare minimum for a Node.js app running on [Amazon Lambda](http://aws.amazon.com/lambda/). Forked from [node-lambda-template](https://github.com/motdotla/node-lambda-template).

It uses [node-lambda](https://github.com/motdotla/node-lambda) under the hood to locally run and also deploy your Node.js Amazon Lambda application.

This custom template also includes [Gulp](http://gulpjs.com/) tasks so you can write Lambda functions in [Coffeescript](http://coffeescript.org/) and compile them to JavaScript, which is was the AWS Lambda runtime expects.

## Using this template

1. **Download** (_not_ fork or clone) this repo to your machine.
2. Following installation instructions below to `npm install` the NPM packages and `npm run setup` to generate files.
3. Create a new Git repo on your machine from the downloaded code.

---

Everything below in this README can be updated and used in an actual project that uses this template.

---

# app-name

Describe what this Lambda function/app does.

## Installation

Clone this repository, then install NPM packages and run `setup`:

```
cd /to/your/local/path
npm install
npm run setup
```

- `event.json` is where you mock your event.
- `context.json` is where you can add additional mock data to the context passed to your lambda function.
- `.env` is where you place your deployment configuration.
- `deploy.env` has the same format as `.env`, but is used for holding any environment/config variables that you need to be deployed with your code to Lambda but you don't want in version control (e.g. DB connection info).

This project is based on our [node-lambda-template project](https://github.com/rarestep/node-lambda-template). There are several commands that are part of the template. For more installation details, check out its README.

```
npm run setup # setup node-lambda files
npm run test # test your event handler and check output
npm run package # just generate the zip that would be uploaded to AWS
```

## Running locally

Use the Gulp `run` task, which automatically adds `-f deploy.env` param.

```
$ gulp run
```

#### `event.json` example

Copy/paste the example below into the generated `event.json` file. Note that `event.json` is gitignored since it may be modified to include private data during development, but the following example should get your started.

```
TODO add app example
```

#### `deploy.json` example

Private variables needed in this Lambda function that will also be deployed to Lambda.

```
TODO add app example
```

## Deploying

```
$ gulp deploy
```

#### `.env` example

Add the following variables with the appropriate values to your `.env` file in order to deploy this Lamdba function.

```
AWS_ACCESS_KEY_ID=XXX
AWS_SECRET_ACCESS_KEY=XXX
AWS_ROLE_ARN=arn:aws:iam::XXX
```

## Compiling

This project uses Gulp to compile CoffeeScript files in `/src` to JS files, which is what Amazon Lambda expects.

Auto-compile:
```
$ gulp watch
```

Manually compile:
```
$ gulp compile
```
