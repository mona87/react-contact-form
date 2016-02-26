var Backbone = require('backbone');
var validator = require('validator')

module.exports = Backbone.Model.extend({
	defaults:{
		name: '',
		email: '',
		website: '',
		message: ''
	},
	validate: function(model){
		
		if(!model.name){
			return 'Please enter a name.'
		}
		else if(!model.email){
			return 'Please enter an email.'
		}
		else if(!validator.isEmail(model.email)){
			return 'Please enter a valid email address'
		}
		else if(!model.website){
			return 'Please enter a website'
		}
		else if(!validator.isURL(model.website)){
			return 'Please enter a valid website'
		}
		else if(!model.message){
			return 'Please enter a message.'
		}
	}
})
