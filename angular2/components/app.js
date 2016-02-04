(function()
{
	var AppComponent = ng
		.Component({ selector: "goalie", templateUrl: "templates/app.html" })
		.Class({ constructor: function () { } });

	document.addEventListener('DOMContentLoaded', function() { ng.bootstrap(AppComponent); });

})();