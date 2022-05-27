const data = {
    name:"sumit",
    age : 36,
    degree : "free",
}; 
console.log(data.degree);

//  to convert json into object 
// const objdata = JSON.parse(jsondata);
// console.log(objdata)

// task 1
// convert object to json
// add it to another file 
// read the file 
// convert it into object
// show it into console

// to convert object into json 
const jsondata = JSON.stringify(data);
console.log(jsondata)

const fs = require("fs")
fs.writeFile("json1.json", jsondata, (err)=>{
    console.log(err)
});

fs.readFile("json1.json" ,"utf-8", (err,data)=>{
    // connverting json into object
    const orgdata = JSON.parse(data)  
    console.log("read success" ,data,orgdata);
})
