const fs = require("fs");

fs.readFile("write.txt", "utf-8", (err, data) => {
  console.log(data);    
});
// in the asynchronus the multiple request can be  taken at a same time 
console.log("after the data");
