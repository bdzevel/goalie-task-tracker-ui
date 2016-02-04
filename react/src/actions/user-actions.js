var constants = require("../resources/constants.js").Users;
var Dispatcher = require("../dispatcher/dispatcher.js");

var actions = { };

actions.Create = function(user)
{
	Dispatcher.dispatch({ Type: constants.Actions.Create, Payload: user });
}

module.exports = actions;