var constants = require("../resources/constants.js").Navigation;
var Dispatcher = require("../dispatcher/dispatcher.js");

var actions = { };

actions.Navigate = function(page)
{
	Dispatcher.Dispatch({ Type: constants.Actions.Navigate, Payload: page });
}
actions.NavigateHome = function()
{
	Dispatcher.dispatch({ Type: constants.Actions.Navigate, Payload: constants.Pages.Home });
}
actions.NavigateSignIn = function()
{
	Dispatcher.dispatch({ Type: constants.Actions.Navigate, Payload: constants.Pages.SignIn });
}
actions.NavigateRegister = function()
{
	Dispatcher.dispatch({ Type: constants.Actions.Navigate, Payload: constants.Pages.Registration });
}

module.exports = actions;