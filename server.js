var express = require("express");
var timesyncServer = require("timesync/server");

// create an express app
var port = 8081;
var app = express();
app.listen(port);
console.log("Server listening at http://localhost:" + port);

// handle timesync requests
app.use("/timesync", timesyncServer.requestHandler);
