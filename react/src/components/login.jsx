var Input = require("react-bootstrap").Input;
var ButtonInput = require("react-bootstrap").ButtonInput;

var AuthStore = require("../stores/auth-store.js");
var AuthActions = require("../actions/auth-actions.js");

var LoginFormSpec = { };

LoginFormSpec.HandleLogIn = function(e)
{
	e.preventDefault();
	if (!this.Validate())
		return;
	this.setState({ error: null });
	AuthActions.SignIn(this.state);
}

LoginFormSpec.Validate = function()
{
	if (!this.state.username || this.state.username.length === 0)
	{
		this.setState({ password: "", confirmPassword: "", error: "Enter a username." });
		return false;
	}
	if (!this.state.password || this.state.password.length === 0)
	{
		this.setState({ password: "", confirmPassword: "", error: "Enter a password." });
		return false;
	}
	return true;
}

LoginFormSpec.HandleError = function(error)
{
	this.setState({ password: "", error: error });
}

LoginFormSpec.HandleUserNameChange = function(e)
{
	this.setState({ username: e.target.value });
}

LoginFormSpec.HandlePasswordChange = function(e)
{
	this.setState({ password: e.target.value });
}

LoginFormSpec.componentDidMount = function()
{
	AuthStore.AddErrorListener(this.HandleError);
}

LoginFormSpec.componentWillUnmount = function()
{
	AuthStore.RemoveErrorListener(this.HandleError);
}

LoginFormSpec.getInitialState = function()
{
	return { };
}

LoginFormSpec.render = function()
{
	var message = "";
	if (this.state.error)
		message = <p className="error">{this.state.error}</p>;
	return (
		<form onSubmit={this.HandleLogIn}>
			<Input label="Username" type="text" value={this.state.username} onChange={this.HandleUserNameChange} />
			<Input label="Password" type="password" value={this.state.password} onChange={this.HandlePasswordChange} />
			<ButtonInput type="submit" value="Sign In" />
			{message}
		</form>
	);
}

var React = require("react");
var LoginForm = React.createClass(LoginFormSpec);
module.exports = LoginForm;