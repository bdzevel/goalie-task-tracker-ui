var Input = require("react-bootstrap").Input;
var ButtonInput = require("react-bootstrap").ButtonInput;

var GoalActions = require("../actions/goal-actions.js");

var NewGoalFormSpec = { };

NewGoalFormSpec.NewGoal = function(e)
{
	e.preventDefault();
	if (!this.Validate())
		return;
	var goal = { Description: this.state.description, Reason: this.state.reason };
	GoalActions.Create(goal);
	this.setState(this.getInitialState());
}

NewGoalFormSpec.Validate = function()
{
	if (!this.state.description || this.state.description.length === 0)
	{
		this.setState({ password: "", confirmPassword: "", error: "Enter a description." });
		return false;
	}
	return true;
}

NewGoalFormSpec.HandleDescriptionChange = function(e)
{
	this.setState({ description: e.target.value });
}

NewGoalFormSpec.HandleReasonChange = function(e)
{
	this.setState({ reason: e.target.value });
}

NewGoalFormSpec.getInitialState = function()
{
	return ({ description: "", reason: "" });
}

NewGoalFormSpec.render = function()
{
	var message = "";
	if (this.state.error)
		message = <p className="error">{this.state.error}</p>;
	return (
		<form onSubmit={this.NewGoal}>
			<Input className="user-input" type="text" label="Description" value={this.state.description} onChange={this.HandleDescriptionChange} />
			<Input className="user-input" type="text" label="Reason" placeholder="Optional" value={this.state.reason} onChange={this.HandleReasonChange} />
			<ButtonInput type="submit" value="Submit New Goal" />
			{message}
		</form>
	);
}

var React = require("react");
var NewGoalForm = React.createClass(NewGoalFormSpec);
module.exports = NewGoalForm;