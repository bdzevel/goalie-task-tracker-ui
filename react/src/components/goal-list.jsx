var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Grid = require("react-bootstrap").Grid;
var GoalListItem = require("./goal-list-item.jsx");
var ListGroup = require("react-bootstrap").ListGroup;

var GoalActions = require("../actions/goal-actions.js");
var GoalStore = require("../stores/goal-store.js");

var GoalListSpec = { };

GoalListSpec.UpdateGoals = function()
{
	this.setState({ goals: GoalStore.GetGoals() });
}

GoalListSpec.MarkAllDone = function(e)
{
	e.preventDefault();
	GoalActions.CompleteAll();
}

GoalListSpec.ClearAll = function(e)
{
	e.preventDefault();
	GoalActions.Clear();
}

GoalListSpec.getInitialState = function()
{
	return { goals: [] };
}

GoalListSpec.componentDidMount = function()
{
	GoalStore.AddUpdateAllListener(this.UpdateGoals);
	GoalActions.Fetch();
}

GoalListSpec.componentWillUnmount = function()
{
	GoalStore.AddUpdateAllListener(this.UpdateGoals);
}

GoalListSpec.render = function()
{
	// TODO: Find a good way to "mark all done"
	var goals = this.state.goals;
	if (goals && goals.length != 0)
	{
		return (
			<ListGroup componentClass="ul">
				{ goals.map(function(goal) { return <GoalListItem key={goal._id} goal={goal} />; }) }
			</ListGroup>
		);
	}
	return <h3>You have no goals... Please submit one.</h3>;
}

var React = require("react");
var GoalList = React.createClass(GoalListSpec);
module.exports = GoalList;