const name = "sumit";
console.log(name);


// in node the module wrapper function wraap the name = sumit in wrapper funstion and make it private (IIFE)

// in node it look something like that 


// code behind the scene  and wrapper function make it private or local varialble
(function (exports, require, module, __filename, __dirname) {  
    const name = "sumit";
    console.log(name);

});