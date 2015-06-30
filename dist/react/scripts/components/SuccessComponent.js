var React = require('react');

module.exports = React.createClass({
	render: function(){
		return(
			<div className="formHolder">
			<form>Thanks for contacting us {this.props.name}. We have recieved your message and will be in touch with you shortly.</form>
			</div>
		);
	}
})