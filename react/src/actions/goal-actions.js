var constants = require("../resources/constants.js").Goals;
var Dispatcher = require("../dispatcher/dispatcher.js");

var actions = { };

actions.Fetch = function()
{
	Dispatcher.dispatch({ Type: constants.Actions.Fetch });
}

actions.Create = function(goal)
{
	Dispatcher.dispatch({ Type: constants.Actions.Create, Payload: goal });
}

actions.Update = function(goal)
{
	Dispatcher.dispatch({ Type: constants.Actions.Update, Payload: goal });
}

actions.Delete = function(goal)
{
	Dispatcher.dispatch({ Type: constants.Actions.Delete, Payload: goal });
}

actions.CompleteAll = function()
{
	Dispatcher.dispatch({ Type: constants.Actions.CompleteAll });
}

actions.Clear = function()
{
	Dispatcher.dispatch({ Type: constants.Actions.Clear });
}

module.exports = actions;