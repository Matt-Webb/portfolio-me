// To run this server go to the command line for this directory and run: node server.js
// note: you must have node installed.

var connect = require('connect');
var serveStatic = require('serve-static');
var port = 8080;

connect().use(serveStatic(__dirname)).listen(port);


// Logging initialization
console.log('running test Webb Digital application on port: ' + port);