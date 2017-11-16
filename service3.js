// https://www.npmjs.com/package/seneca
// http://senecajs.org/getting-started/
const Seneca = require('seneca');
// https://www.npmjs.com/package/timesync
const timesync = require('timesync');

 var id = "peer3";
 var peers = ["peer1", "peer2"];
//  var obj = connect(id, peers);
//  var peer = obj.peer;
//  var ts = obj.ts;

console.log('Service 3');
const ts = require("./time-sync-client.js").init();
console.log("TS",ts.now());
Seneca()
  .use("./transactions.js", { ts: ts })
  .listen({ port: "8000", pin: "role:transaction" });