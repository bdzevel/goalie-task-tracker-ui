var constants = require("../resources/constants.js").Authentication;
var Dispatcher = require("../dispatcher/dispatcher.js");

var actions = { };

actions.SignIn = function(credentials)
{
	Dispatcher.dispatch({ Type: constants.Actions.SignIn, Payload: credentials });
}

actions.Validate = function()
{
	Dispatcher.dispatch({ Type: constants.Actions.Validate });
}

actions.SignOut = function()
{
	Dispatcher.dispatch({ Type: constants.Actions.SignOut });
}

module.exports = actions;