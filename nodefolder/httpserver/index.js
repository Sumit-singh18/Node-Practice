// To use the HTTP server and client one must require('http').

// The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages.
//  The interface is careful to never buffer entire requests or responses, so the user is able to stream data.

const http = require("http");
const fs = require("fs");

// to create a server in  node js we must  used http.createServer()

const server = http.createServer((req, res) => {
  // to call the api

  fs.readFile(`${__dirname}/userapi/userapi.json`, "utf-8", (err, data) => {
    //  converting into object format
  const objdata = JSON.parse(data);
    // to call all the data  from api in json fromat
    // res.end(data);

    // to call a particular data from api in object format
     res.end(objdata[0].name);

    console.log(err);
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to port 8000");
});
