var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var emailConfig = require('../config/emailConfig');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/send-email', function(req, res){
	console.log(req.body);

	var transporter = nodemailer.createTransport(emailConfig);

	var message ={
		from: req.body.email,
		to: 'bellamy2727@yahoo.com',
		subject: 'Hello World Contact Form',
		text: req.body.message,
		html: '<p>'+req.body.message+'</p>'
	}

	 // res.send('Request Recieved')

	transporter.sendMail(message,function(err, info){
		if(err){
			console.log(error)
		}
		else{
			console.log(info);
		}
	})
	 res.send('Message Sent')

})



module.exports = router;
