var AJAX = require("../ajax.js");
var AuthStore = require("./auth-store.js");
var EventEmitter = require("events").EventEmitter;
var Dispatcher = require("../dispatcher/dispatcher.js");
var constants = require("../resources/constants.js").Users;

function UserStore() { }
UserStore.prototype = new EventEmitter();

UserStore.prototype.NotifyError = function(error)
{
	this.emit(constants.Events.OnError, error);
}

UserStore.prototype.AddErrorListener = function(callback)
{
	this.on(constants.Events.OnError, callback);
}
UserStore.prototype.RemoveErrorListener = function(callback)
{
	this.removeListener(constants.Events.OnError, callback);
}

var store = new UserStore();
Dispatcher.register(UserActionHandler);

function UserActionHandler(action)
{
	if (action.Type == constants.Actions.Create)
	{
		Register(action.Payload);
	}
}

function OnError(result)
{
	console.error("ERROR");
	console.error(result);
	store.NotifyError(result.responseJSON.error);
}

function Register(user)
{
	var body = JSON.stringify(user);
	AJAX("POST", constants.URL, OnRegister, OnError, body);
}
function OnRegister(result)
{
	AuthStore.NotifySignIn();
}

module.exports = store;