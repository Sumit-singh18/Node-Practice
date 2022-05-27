const fs = require("fs");
// in asynchronus file callback unction must be there.  
// err is paassed as a callback function to check the error 
fs.writeFile("write.txt", " practice of asynchronus", (err) => {     

  console.log("completed");
  console.log(err);  
});

// apppend file is used to append the data in  the existing file 
fs.appendFile("write.txt","it is apppend in  alooooo zfile",(err)=>{
    console.log(" data is appended")
})

// to read file in asynch 
// to read a file in asynchronus in the time of callback function data is used to read the data in file 
fs.readFile("write.txt","utf-8",(err, data)=>{
    console.log(data);
    console.log(err);

});