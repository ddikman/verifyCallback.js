var assert = require('assert');
var verifyCallback = require("../verifyCallback.js");

function Callback(callback){

	this.callbackFunction = callback;

	this.shouldThrowException = function(message){

		try
		{
			this.callbackFunction();
		}
		catch(e)
		{
			if(message != null)
				assert.equal(e.message, message);

			return;
		}

		throw "The callback didn't throw an exception"

	};

};

describe("when calling function", function() {

	describe("with a valid callback", function(){

		it("should happily pass", function(){

			var whatIInput = "is this";

			var aProperCallback = function(err, data){

				assert.equal(err, null);
				assert.equal(whatIInput, data);
			};

			verifyCallback(aProperCallback);

			aProperCallback(null, whatIInput);

		});

	});

	describe("with an invalid callback", function(){

		it("should fail with a message telling which invalid type has been given", function(){

			var callback = new Callback(function(){ verifyCallback(2.3) });
			callback.shouldThrowException("Object is not a valid callback: number");

		});


		it("should fail if input is anything else than a function", function(){

			var testValues = ["a string", 2, { name: "object" }, 2.3, null];

			testValues.forEach(function(input){
				var callback = new Callback(function(){ verifyCallback(input) });
				callback.shouldThrowException();
			})

		});

		it("should fail with error if callback hasn't got two inputs", function(){

			var callback = new Callback(function(){
				verifyCallback(function(e1, e2, e3){});
			});
			callback.shouldThrowException("Callback has 3 instead of 2 (error and result) arguments");

		});

	});

});