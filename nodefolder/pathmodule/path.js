const path = require('path');

// to chek the directory of the file we uses the path  module
console.log(path.dirname('E:/node practice/pathmodule/path.js'))


// to checkl the extension of the file 
console.log(path.extname('E:/node practice/pathmodule/path.js'))

// to check the file name / base name of the extension 
console.log(path.basename('E:/node practice/pathmodule/path.js'))

// to check the name , base, root , dir, extension in path
console.log(path.parse('E:/node practice/pathmodule/path.js'))

// to call the particular property from the parse property
const mypath = path.parse('E:/node practice/pathmodule/path.js')
console.log(mypath.name);
console.log(mypath.root);