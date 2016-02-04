var Well = require("react-bootstrap").Well;

var GoalList = require("./goal-list.jsx");
var NewGoalForm = require("./new-goal.jsx");

var GoalContentSpec = { };

GoalContentSpec.HandleCollapse = function(e)
{
	this.setState({ open: !this.state.open }); 
}

GoalContentSpec.getInitialState = function()
{
	return { open: false };
}

GoalContentSpec.render = function()
{
	return (
		<div>
			<GoalList />
			<Well>
				<NewGoalForm />
			</Well>
		</div>
	);
};

var React = require("react");
var GoalContent = React.createClass(GoalContentSpec);
module.exports = GoalContent;