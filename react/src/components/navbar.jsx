var Nav = require("react-bootstrap").Nav;
var Navbar = require("react-bootstrap").Navbar;
var NavItem = require("react-bootstrap").NavItem;

var AuthStore = require("../stores/auth-store.js");
var NavActions = require("../actions/nav-actions.js");
var AuthActions = require("../actions/auth-actions.js");

var NavBarSpec = { };

NavBarSpec.CanGoHome = function()
{
	return true;
}
NavBarSpec.OnClickHome = function(e)
{
	e.preventDefault();
	NavActions.NavigateHome();
}

NavBarSpec.CanSignIn = function()
{
	return !this.state.isSignedIn;
}
NavBarSpec.OnClickSignIn = function(e)
{
	e.preventDefault();
	NavActions.NavigateSignIn();
}

NavBarSpec.CanRegister = function()
{
	return !this.state.isSignedIn;
}
NavBarSpec.OnClickRegister = function(e)
{
	e.preventDefault();
	NavActions.NavigateRegister();
}

NavBarSpec.CanSignOut = function()
{
	return this.state.isSignedIn;
}
NavBarSpec.OnClickSignOut = function(e)
{
	e.preventDefault();
	
	// This is the only nav-bar option that doesn't "navigate"
	//	There's no "sign out" page - it just signs out
	AuthActions.SignOut();
}

NavBarSpec.OnSignIn = function()
{
	this.setState({ isSignedIn: true });
}
NavBarSpec.OnSignOut = function()
{
	this.setState({ isSignedIn: false });
}

NavBarSpec.getInitialState = function()
{
	return { };
}

NavBarSpec.componentWillMount = function()
{
	this.Actions = [];
	this.RegisterAction("Sign In", this.CanSignIn, this.OnClickSignIn);
	this.RegisterAction("Register", this.CanRegister, this.OnClickRegister);
	this.RegisterAction("Sign Out", this.CanSignOut, this.OnClickSignOut);
}

NavBarSpec.RegisterAction = function(name, canExecuteCallback, executeCallback)
{
	this.Actions.push({ Name: name, CanExecute: canExecuteCallback, Execute: executeCallback });
}

NavBarSpec.componentDidMount = function()
{
	AuthStore.AddSignInListener(this.OnSignIn);
	AuthStore.AddSignOutListener(this.OnSignOut);
}

NavBarSpec.componentWillUnmount = function()
{
	AuthStore.RemoveSignInListener(this.OnSignIn);
	AuthStore.RemoveSignOutListener(this.OnSignOut);
}

NavBarSpec.render = function()
{
	var items = this.Actions.map(function(action)
	{
		if (action.CanExecute())
			return <NavItem key={action.Name} onClick={action.Execute}>{action.Name}</NavItem>;
		else
			return null;
	});
	var navBar = (
		<Navbar fluid>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="#" onClick={this.OnClickHome}>Goalie</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					{items}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
	return navBar;
}

var React = require("react");
var NavBar = React.createClass(NavBarSpec);
module.exports = NavBar;