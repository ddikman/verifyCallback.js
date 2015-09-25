
function InvalidCallbackException(callback, message){
	
	if(message == null)
		this.message = "Object is not a valid callback: " + typeof(callback);
	else
		this.message = message;

	this.callbackObject = callback;
	this.name = "InvalidCallbackException";
};

module.exports = function(callback){

	if(typeof(callback) != 'function')
		throw new InvalidCallbackException(callback);

	if(callback.length != 2)
		throw new InvalidCallbackException(callback, "Callback has " + callback.length + " instead of 2 (error and result) arguments");

};