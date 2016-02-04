var Input = require("react-bootstrap").Input;
var ButtonInput = require("react-bootstrap").ButtonInput;

var UserStore = require("../stores/user-store.js");
var UserActions = require("../actions/user-actions.js");

var RegisterFormSpec = { };

RegisterFormSpec.HandleRegister = function(e)
{
	e.preventDefault();
	if (!this.Validate())
		return;
	this.setState({ error: null });
	UserActions.Create(this.state);
}

RegisterFormSpec.Validate = function()
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
	if (this.state.password !== this.state.confirmPassword)
	{
		this.setState({ password: "", confirmPassword: "", error: "Passwords don't match." });
		return false;
	}
	return true;
}

RegisterFormSpec.HandleError = function(error)
{
	this.setState({ password: "", confirmPassword: "", error: error });
}

RegisterFormSpec.HandleUserNameChange = function(e)
{
	this.setState({ username: e.target.value });
}

RegisterFormSpec.HandleEmailChange = function(e)
{
	this.setState({ email: e.target.value });
}

RegisterFormSpec.HandlePasswordChange = function(e)
{
	this.setState({ password: e.target.value });
}

RegisterFormSpec.HandleConfirmPasswordChange = function(e)
{
	this.setState({ confirmPassword: e.target.value });
}

RegisterFormSpec.componentDidMount = function()
{
	UserStore.AddErrorListener(this.HandleError);
}

RegisterFormSpec.componentWillUnmount = function()
{
	UserStore.RemoveErrorListener(this.HandleError);
}

RegisterFormSpec.getInitialState = function()
{
	return { };
}

RegisterFormSpec.render = function()
{
	var message = "";
	if (this.state.error)
		message = <p className="error">{this.state.error}</p>;
	return (
		<form onSubmit={this.HandleRegister}>
			<Input label="Username" type="text" value={this.state.username} onChange={this.HandleUserNameChange} />
			<Input label="Email Address" type="text" placeholder="Optional" value={this.state.email} onChange={this.HandleEmailChange} />
			<Input label="Password" type="password" value={this.state.password} onChange={this.HandlePasswordChange} />
			<Input label="Confirm Password" type="password" value={this.state.confirmPassword} onChange={this.HandleConfirmPasswordChange} />
			<ButtonInput type="submit" value="Register" />
			{message}
		</form>
	);
}

var React = require("react");
var RegisterForm = React.createClass(RegisterFormSpec);
module.exports = RegisterForm;