var React = require('react');
var Backbone = require('backbone');
var FormModel = require('../models/FormModel');
var $ = require('jquery');
Backbone.$ = require('jquery');

module.exports = React.createClass({

	render: function(){
		return(
			<div className="formHolder">
				<form onSubmit={this.submit}>
					<div className="error" ref="error"></div>
					<label>Name</label>
					<input ref="name" type="text"/>
					<label>Email</label>
					<input ref="email" type="text"/>
					<label>Website</label>
					<input ref="website" type="text"/>
					<label>Message</label>
					<textarea ref="msg"></textarea>
					<button>Submit</button>
				</form>
			</div>
		);
	},
	submit: function(e){
		e.preventDefault();
		var form = new FormModel({
			name: this.refs.name.getDOMNode().value,
			email: this.refs.email.getDOMNode().value,
			website: this.refs.website.getDOMNode().value,
			message: this.refs.msg.getDOMNode().value
		});
		if(!form.isValid()){
				console.log(form.validationError);
			this.refs.error.getDOMNode().innerHTML = form.validationError;
		}
		else{
			console.log('valid');
			this.refs.error.getDOMNode().innerHTML= '';
			$.post('http://localhost:3000/send-email', {email: form.get('email'), message: form.get('message')}, function(res){
				console.log(res)
			}

			);
			this.props.router.navigate('success/'+form.get('name'), {trigger: true});
		}
	
	}


});