// https://www.npmjs.com/package/seneca
// http://senecajs.org/getting-started/
const Seneca = require('seneca');
// https://www.npmjs.com/package/timesync
console.log('Service 2');
const ts = require("./time-sync-client.js").init();
 var id = "peer2";
 var peers = ["peer1", "peer3"];
//  var obj = connect(id, peers);
//  var peer = obj.peer;
//  var ts = obj.ts;
Seneca()
  .client({ port: "8000", pin: "role:transaction" })
  .act(
    {
      role: "transaction",
      order: "buy",
      symbol: "AAPL",
      quantity: 30,

    },
    function(err, result) {
      if (err) return console.error(err);
      console.log(result);
    }
  )
  .act(
    {
      role: "transaction",
      order: "sell",
      symbol: "AAPL",
      quantity: 10,

    },
    function(err, result) {
      if (err) return console.error(err);
      console.log(result);
    }
  );
