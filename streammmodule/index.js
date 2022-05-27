const fs = require('fs');
const http = require('http');
const { Stream } = require('stream');

const server = http.createServer(http);

server.on('request' ,(req, res)=>{

    // normal way to read a file 
    // fs.readFile('input.txt',(err,data)=>{
    //     console.log(err)
    //     res.end(data.toString())
    // })

    // 2 
    // read a Stream 
    // create readable stream 
    // handle stream event > daata , end , error
//      const rstream = fs.createReadStream("input.txt")
//      rstream.on('data' ,(largedata)=>{
//          res.write(largedata)
//      })
//      rstream.on('end', ()=>{
//          res.end()
//      })
//   rstream.on('error',()=>{
//       res.end("file error")
//   })
//   read a file through stram pipe 
const rstream = fs.createReadStream('input.txt')
rstream.pipe(res)
})
server.listen(8000 , '127.0.0.1')