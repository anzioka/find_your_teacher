module.exports = function(app) {
	//server routes (backend)
	

	//front end routes
app.get('*', function(req, res) {
		res.sendFile('./public/index.html');
	});	
};