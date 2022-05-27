const add = (a,b)=>{
    return (a+b)
};
const sub = (a,b)=>{
    return (a-b)
};
const multi= (a,b)=>{
    return (a*b)
};

const name = "sumit";

// module.exports = add;   to call single module 

// to export module in node u need to export the module to use it in another file 
module.exports.add = add;
module.exports.sub = sub;
// to prevent from the module overlaping we use .add .sub at the end of th eexport to export it particularly 

// to export multiple module 
module.exports = { add , sub, multi, name};

