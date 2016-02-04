var NavBar = require("./navbar.jsx");
var Content = require("./content.jsx");

var AuthActions = require("../actions/auth-actions.js");

var GoalieAppSpec = { };

GoalieAppSpec.componentDidMount = function()
{
	AuthActions.Validate();
}

GoalieAppSpec.render = function()
{
	return (
		<div className="goalie-app">
			<NavBar />
			<Content />
		</div>
	);
}

var React = require('react');
var GoalieApp = React.createClass(GoalieAppSpec);
module.exports = GoalieApp;