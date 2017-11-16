const timesync = require('timesync');

// module.exports = {
// init: function() {
//   var ts = timesync.create({
//     //  server: "http://localhost:4000/timesync",
//     interval: 10000
//     });
//     // get notified on changes in the offset
//     ts.on('change', function (offset) {
//       console.log('changed offset: ' + offset + ' ms');
//     });
//     // get synchronized time
//     setInterval(function () {
//       var now = new Date(ts.now());
//       console.log('now: ' + now.toISOString() + ' ms');
//     }, 5000);
//     return ts;
//     }
// };

/**
 * Create a peer with id, and connect to the given peers
 ** @param {string} id
 * @param {string[]} peers
 * @return {{peer: Window.Peer, ts: Object}} Returns an object with the
 *
 *
 *created peer and the timesync
 */
var PeerServer = require("peer").PeerServer;
var server = PeerServer({ port: 9000, path: "/myapp" });
function connect(id, peers) {

  var ts = timesync.create({
    peers: [], // start empty, will be updated at the start of every synchronization
    interval: 5000,
    delay: 200,
    timeout: 1000
  });

  ts.on('sync', function (state) {
    console.log('sync ' + state);
    if (state == 'start') {
      ts.options.peers = openConnections();
      console.log('syncing with peers [' + ts.options.peers.join(', ') + ']');
    }
  });

  ts.on('change', function (offset) {
    console.log('changed offset: ' + offset);
  });

  ts.send = function (ida, data) {
    //console.log('send', id, data);
    var all = peer.connections[ida];
    var conn = all && all.filter(function (conna) {
      return conna.open;
    })[0];

    if (conn) {
      conn.send(data);
    }
    else {
      console.log(new Error('Cannot send message: not connected to ' + id).toString());
    }
  };

  // show the system time and synced time once a second on screen

  // Create a new Peer with the demo API key
  var peer = new Peer(id, {
    host: "localhost",
    port: 9000,
    path: "/myapp"
  });
  peer.on('open', connectToPeers);
  peer.on('connection', setupConnection);

  function openConnections() {
    return Object.keys(peer.connections).filter(function (ida) {
      return peer.connections[ida].some(function (conn) {
        return conn.open;
      });
    });
  }

  function connectToPeers() {
    peers
        .filter(function (ida) {
          return peer.connections[ida] === undefined;
        })
        .forEach(function (ida) {
          console.log('connecting with ' + ida + '...');
          var conn = peer.connect(ida);
          setupConnection(conn);
        });
  }

  function setupConnection(conn) {
    conn
        .on('open', function () {
          console.log('connected with ' + conn.peer);
        })
        .on('data', function(data) {
          //console.log('receive', conn.peer, data);
          ts.receive(conn.peer, data);
        })
        .on('close', function () {
          console.log('disconnected from ' + conn.peer);
        })
        .on('error', function (err) {
          console.log('Error', err);
        });
  }

  // check whether there are connections missing every 10 sec
  setInterval(connectToPeers, 10000);

  return {
    peer: peer,
    ts: ts
  };
}
