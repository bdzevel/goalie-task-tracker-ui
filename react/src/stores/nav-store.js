var EventEmitter = require("events").EventEmitter;
var Dispatcher = require("../dispatcher/dispatcher.js");
var constants = require("../resources/constants.js").Navigation;

function NavStore() { }
NavStore.prototype = new EventEmitter();

NavStore.prototype.NotifyNavigate = function(payload)
{
	this.emit(constants.Events.OnNavigate, payload);
}

NavStore.prototype.AddNavigateListener = function(callback)
{
	this.on(constants.Events.OnNavigate, callback);
}
NavStore.prototype.RemoveNavigateListener = function(callback)
{
	this.removeListener(constants.Events.OnNavigate, callback);
}

var store = new NavStore();
Dispatcher.register(NavigateActionHandler);

function NavigateActionHandler(action)
{
	if (action.Type == constants.Actions.Navigate)
	{
		store.NotifyNavigate(action.Payload);
	}
}

module.exports = store;