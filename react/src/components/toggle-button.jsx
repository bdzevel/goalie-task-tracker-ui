var Button = require("react-bootstrap").Button;
var Glyphicon = require("react-bootstrap").Glyphicon;

var ToggleButtonSpec = { };

ToggleButtonSpec.OnToggle = function(e)
{
	e.target.toggled = !this.props.toggled;
	this.props.onChange(e);
}

ToggleButtonSpec.render = function()
{
	var glyph = <Glyphicon glyph={this.props.toggled ? "check" : "unchecked"} />;
	return <Button bsSize="small" bsStyle="link" onClick={this.OnToggle}>{glyph}</Button>;
}
//{this.props.toggled ? "success" : "default"}
var React = require('react');
var ToggleButton = React.createClass(ToggleButtonSpec);
module.exports = ToggleButton;