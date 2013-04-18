var http = require('http');
http.createServer(function (req, res) {
  	(function () {
  		res.write('hello world \n');
  		setTimeout(arguments.callee, 500);
	})();  	
}).listen(process.env.PORT || 1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');