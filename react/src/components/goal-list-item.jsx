var Row = require("react-bootstrap").Row;
var Col = require("react-bootstrap").Col;
var Grid = require("react-bootstrap").Grid;
var Button = require("react-bootstrap").Button;
var Tooltip = require("react-bootstrap").Tooltip;
var Glyphicon = require("react-bootstrap").Glyphicon;
var OverlayTrigger = require("react-bootstrap").OverlayTrigger;

var ToggleButton = require("./toggle-button.jsx");
var ConfirmationDialog = require("./confirm-dialog.jsx");

var GoalStore = require("../stores/goal-store.js");
var GoalActions = require("../actions/goal-actions.js");

var GoalListItemSpec = { };

GoalListItemSpec.Update = function(goal)
{
	if (this.props.goal._id != goal._id)
		return;
		
	// Force re-render of this item
	this.setState({ });
}

GoalListItemSpec.ConfirmDelete = function(e)
{
	e.preventDefault();
	this.setState({ showConfirmDialog: true });
}

GoalListItemSpec.HideModal = function()
{
	this.setState({ showConfirmDialog: false });
}

GoalListItemSpec.Delete = function(e)
{
	GoalActions.Delete(this.props.goal);
	this.HideModal();
}

GoalListItemSpec.HandleIsCompleteChanged = function(e)
{
	this.setState({ isComplete: e.target.toggled });
	this.props.goal.IsComplete = e.target.toggled;
	GoalActions.Update(this.props.goal);
}

GoalListItemSpec.getInitialState = function()
{
	return { isComplete: this.props.goal.IsComplete, showConfirmDialog: false };
}

GoalListItemSpec.componentDidMount = function()
{
	GoalStore.AddUpdateListener(this.Update);
}

GoalListItemSpec.componentWillUnmount = function()
{
	GoalStore.RemoveUpdateListener(this.Update);
}

GoalListItemSpec.render = function()
{
	// NOTE: This is a heavily customized "ListGroupItem" (which is an actual react-bootstrap component)
	//	It had to be customized completely because of issues nesting the Grid I wanted inside a "<p>" tag,
	//	 which it  guess is what the standard "ListGroupItem" implementation does somewhere along the way.
	//	Initially it was just giving a warning in Chrome, but ultimately when implementing the "ConfirmationDialog" modal,
	//	 it actually started to throw errors.
	var goal = this.props.goal;
	var deleteButtonTooltip = <Tooltip id={goal._id}>Delete this goal</Tooltip>
	return (
		<li className={"list-group-item list-group-item-" + (this.state.isComplete ? "success" : "info")}>
			<Grid fluid>	
				<Row>
					<Col md={1}>
						<ToggleButton toggled={this.state.isComplete} onChange={this.HandleIsCompleteChanged} />
					</Col>
					<Col sm={6} md={11}>
						<h4>{goal.Description}</h4>
					</Col>
				</Row>
				<Row>
					<Col sm={4} md={8}>
						{goal.Reason}
					</Col>
					<Col md={3}>
						{goal.Date.toDateString()}
					</Col>
					<Col md={1}>
						<OverlayTrigger placement="top" delayShow={300} delayHide={150} overlay={deleteButtonTooltip}>
							<Button bsStyle="link" bsSize="xsmall" onClick={this.ConfirmDelete}><Glyphicon glyph="remove" /></Button>
						</OverlayTrigger>
					</Col>
				</Row>
			</Grid>
			<ConfirmationDialog
				show={this.state.showConfirmDialog}
				title="Are you sure?"
				description="This will delete the goal forever. There will be no further record of it."
				actiontext="Delete Forever"
				onCancel={this.HideModal}
				onConfirm={this.Delete}
				style="danger"
			/>
		</li>
	);
}

var React = require("react");
var GoalListItem = React.createClass(GoalListItemSpec);
module.exports = GoalListItem;