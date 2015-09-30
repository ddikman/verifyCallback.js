# verifyCallback.js
A very, very small node/javascript module to verify if a callback is a callback

## Why?
I found that in accordance to Node and javascript principles I wanted to make sure I wrote my code with proper callbacks. Being a bit old school I tend to prefer to do things
design by contract, making sure the inputs are correct and fail early, after all what's a single extra function call + equal operator cost in performance compared to debugging
several hours to find an invalid input.

I had a quick look around and didn't find any simple library to verify this kind of thing so here it is.

## Installation
``` bash
npm install verify-callback
```

## Usage
The verifyCallback is really just a simple method so require it and call it whatever works and fits your naming sense:
``` javascript
var verify = require('verify-calback')

function asyncRequest(callback){

	verify(callback);
	
};

```

or maybe a bit more explicit

``` javascript
var verifyCallback = require('verify-calback')

function asyncRequest(callback){

	verifyCallback(callback);
	
};
```

## Forking
Only a few tests, runs with mocha, I expect you'll have to have it installed globally to run:
``` javascript
npm install mocha -g
npm test
```

## On NPM
[https://www.npmjs.com/package/verify-callback](https://www.npmjs.com/package/verify-callback)

## Promise
Using callbacks is a bit old school, please see [promise](https://www.npmjs.com/package/promise) for a better alternative.