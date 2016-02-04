var Modal = require("react-bootstrap").Modal;
var Button = require("react-bootstrap").Button;

var ConfirmationDialogSpec = { };

ConfirmationDialogSpec.render = function()
{
	return (
		<Modal show={this.props.show} onHide={this.props.onCancel}>
			<Modal.Header>
				<Modal.Title>{this.props.title}</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				{this.props.description}
			</Modal.Body>

			<Modal.Footer>
				<Button onClick={this.props.onConfirm} bsStyle={this.props.style}>{this.props.actiontext}</Button>
				<Button onClick={this.props.onCancel}>Cancel</Button>
			</Modal.Footer>
		</Modal>
	);
}

var React = require('react');
var ConfirmationDialog = React.createClass(ConfirmationDialogSpec);
module.exports = ConfirmationDialog;