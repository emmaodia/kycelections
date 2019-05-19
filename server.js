var app = require('./app');
var http = require('http');

var port = normalizePort(process.env.PORT || '1337');
app.set('port', port);

var server = http.createServer(app);

server.listen(port, () => {
  console.log(`app running on ${port}...`)
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
