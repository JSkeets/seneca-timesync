// https://www.npmjs.com/package/seneca
// http://senecajs.org/getting-started/

// https://www.npmjs.com/package/timesync
const timesync = require('timesync');

console.log('Service 1');

const express = require('express');
const timesyncServer = require('timesync/server');

const Seneca = require("seneca");
const SenecaWeb = require("seneca-web");
const Express = require("express");
const seneca = Seneca();
  var id = "peer1";
  var peers = ["peer2", "peer3"];
//   var obj = connect(id, peers);
//   var peer = obj.peer;
    // var ts = obj.ts;

seneca.use(SenecaWeb, {
    context: Express(),
    adapter: require("seneca-web-adapter-express")
});

seneca.ready(() => {
    const app = seneca.export("web/context")();
    app.use("/timesync", timesyncServer.requestHandler);
    app.listen(4000);
});