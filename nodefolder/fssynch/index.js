// const Name = "Youtube Sumit";
// console.log(Name);

const fs = require ("fs");
fs.writeFileSync("read.txt", "Hey this is sumit");

const buf_data= fs.readFileSync("read.txt");
org_data=buf_data.toString();
console.log(org_data);

// to rename the file 
fs.renameSync("read.txt","readwrite.txt");
