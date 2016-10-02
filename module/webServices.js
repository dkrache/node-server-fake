exports.services = function(app){	

        app.get('/head/right', function(req, res) {
                res.sendFile(__dirname +'/data/result_ok.json');
        });

	app.get('/head/left', function(req, res) {
                res.sendFile(__dirname +'/data/result_ok.json');
        });

	app.get('/arm/up', function(req, res) {
                res.sendFile(__dirname +'/data/result_ok.json');
        });

	app.get('/test/fail', function(req, res) {
		res.sendFile(__dirname +'/data/result_ko.json');
	});
}
