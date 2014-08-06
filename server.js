var util = require('util'),
    http = require('http'),
    express = require('express'),
    app = express();

var port = 8100,
    host = '127.0.0.1'

var middleware = require('./middleware');
middleware.enableCors(app);
middleware.enableLogger(app);

var controllers = require('./controllers');
controllers.init(app);


var server = http.createServer(app);

server.listen(port, host, function(){
    console.log(util.format('listening at: %s:%s', host, port));
});