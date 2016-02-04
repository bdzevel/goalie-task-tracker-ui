var AJAX = require("../ajax.js");
var EventEmitter = require("events").EventEmitter;
var Dispatcher = require("../dispatcher/dispatcher.js");
var constants = require("../resources/constants.js").Authentication;

function AuthStore() { }
AuthStore.prototype = new EventEmitter();

AuthStore.prototype.NotifySignIn = function()
{
	this.emit(constants.Events.OnSignIn);
}
AuthStore.prototype.NotifySignOut = function()
{
	this.emit(constants.Events.OnSignOut);
}
AuthStore.prototype.NotifyError = function(error)
{
	this.emit(constants.Events.OnError, error);
}

AuthStore.prototype.AddSignInListener = function(callback)
{
	this.on(constants.Events.OnSignIn, callback);
}
AuthStore.prototype.RemoveSignInListener = function(callback)
{
	this.removeListener(constants.Events.OnSignIn, callback);
}

AuthStore.prototype.AddSignOutListener = function(callback)
{
	this.on(constants.Events.OnSignOut, callback);
}
AuthStore.prototype.RemoveSignOutListener = function(callback)
{
	this.removeListener(constants.Events.OnSignOut, callback);
}

AuthStore.prototype.AddErrorListener = function(callback)
{
	this.on(constants.Events.OnError, callback);
}
AuthStore.prototype.RemoveErrorListener = function(callback)
{
	this.removeListener(constants.Events.OnError, callback);
}

var store = new AuthStore();
Dispatcher.register(AuthActionHandler);

function AuthActionHandler(action)
{
	if (action.Type == constants.Actions.Validate)
	{
		Validate();
	}
	else if (action.Type == constants.Actions.SignIn)
	{
		SignIn(action.Payload);
	}
	else if (action.Type == constants.Actions.SignOut)
	{
		SignOut();
	}
}

function OnError(result)
{
	console.error("ERROR");
	console.error(result);
	store.NotifyError(result.responseJSON.error);
}

function Validate()
{
	AJAX("GET", constants.URL, OnSignIn, function(result) { });
}

function SignIn(credentials)
{
	var body = JSON.stringify(credentials);
	AJAX("POST", constants.URL, OnSignIn, OnError, body);
}
function OnSignIn(result)
{
	store.NotifySignIn();
}

function SignOut()
{
	AJAX("DELETE", constants.URL, OnSignOut, OnError);
}
function OnSignOut(result)
{
	store.NotifySignOut();
}
module.exports = store;