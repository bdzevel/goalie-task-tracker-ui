var Well = require("react-bootstrap").Well;

var LoginForm = require("./login.jsx");
var RegisterForm = require("./register.jsx");
var GoalContent = require("./goal-content.jsx");

var NavStore = require("../stores/nav-store.js");
var AuthStore = require("../stores/auth-store.js");
var constants = require("../resources/constants.js");

var ContentSpec = { };

ContentSpec.Navigate = function(action)
{
	this.setState({ type: action });
}

ContentSpec.OnSignIn = function()
{
	this.setState({ type: constants.Navigation.Pages.Home, isSignedIn: true });
}

ContentSpec.OnSignOut = function()
{
	this.setState(this.getInitialState());
}

ContentSpec.componentDidMount = function()
{
	NavStore.AddNavigateListener(this.Navigate);
	
	AuthStore.AddSignInListener(this.OnSignIn);
	AuthStore.AddSignOutListener(this.OnSignOut);
}

ContentSpec.componentWillUnmount = function()
{
	NavStore.RemoveNavigateListener(this.Navigate);
	
	AuthStore.RemoveSignInListener(this.OnSignIn);
	AuthStore.RemoveSignOutListener(this.OnSignOut);
}

ContentSpec.getInitialState = function()
{
	return { type: constants.Navigation.Pages.Home, isSignedIn: false };
}

ContentSpec.render = function()
{
	var dynamicContent = <br />;
	if (this.state.type == constants.Navigation.Pages.Home)
	{
		if (this.state.isSignedIn)
		{
			dynamicContent = <GoalContent />;
		}
		else
		{
			dynamicContent = <h3>Please sign in...</h3>;
		}
	}
	else if (this.state.type == constants.Navigation.Pages.SignIn)
	{
		dynamicContent = <Well><LoginForm /></Well>;
	}
	else if (this.state.type == constants.Navigation.Pages.Registration)
	{
		dynamicContent = <Well><RegisterForm /></Well>;
	}
	return (
		<div className="container-fluid">
			<div className="content">
				{dynamicContent}
			</div>
		</div>
	);
};

var React = require("react");
var Content = React.createClass(ContentSpec);
module.exports = Content;