var constants = 
{
	HostName: window.location.hostname,
	APIPort: 444,
	Navigation:
	{
		Pages:
		{
			Home: "NAV.PAGE.HOME",
			SignIn: "NAV.PAGE.SIGN_IN",
			Registration: "NAV.PAGE.REGISTRATION"	
		},
		Actions:
		{
			Navigate: "NAV.ACTION.NAVIGATE"
		},
		Events:
		{
			OnNavigate: "NAV.EVENT.ON_NAVIGATE"
		}
	},
	Authentication:
	{
		URL: "/api/authentication",
		Actions:
		{
			Validate: "AUTH.ACTION.VALIDATE",
			SignIn: "AUTH.ACTION.SIGN_IN",
			SignOut: "AUTH.ACTION.SIGN_OUT"
		},
		Events:
		{
			OnSignIn: "AUTH.EVENT.ON_SIGN_IN",
			OnSignOut: "AUTH.EVENT.ON_SIGN_OUT",
			OnError: "AUTH.EVENT.ON_ERROR"
		}
	},
	Users:
	{
		URL: "/api/users",
		Actions:
		{
			Create: "USERS.EVENT.CREATE"
		},
		Events:
		{
			OnRegister: "USERS.EVENT.ON_REGISTER",
			OnError: "AUTH.EVENT.ON_ERROR"
		}
	},
	Goals:
	{
		URL: "/api/goals",
		Actions:
		{
			Fetch: "GOALS.ACTION.FETCH",
			Create: "GOALS.ACTION.CREATE",
			Update: "GOALS.ACTION.UPDATE",
			Delete: "GOALS.ACTION.DELETE",
			CompleteAll: "GOALS.ACTION.COMPLETE_ALL",
			Clear: "GOALS.ACTION.CLEAR"
		},
		Events:
		{
			OnUpdate: "GOALS.EVENT.ON_UPDATE",
			OnUpdateAll: "GOALS.EVENT.ON_UPDATE_ALL"
		}
	}
};

module.exports = constants;