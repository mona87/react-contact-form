var React = require('react');
var FormComponent = require('./components/FormComponent');
var SuccessPage = require('./components/SuccessComponent');
var Backbone = require('backbone');


var App = Backbone.Router.extend({
	routes:{
		'':  		'contact',
		'success/:name':  'success'
	},

	contact: function(){
		console.log('contact');
		React.render(
			<FormComponent router={myRouter}/>,
			document.getElementById('container')
		);
	
	},
	success: function(name){
		console.log('success');
		React.render(
			<SuccessPage name={name} />,
			document.getElementById('container')
		);
	
	}
})

var myRouter = new App();
Backbone.history.start();

