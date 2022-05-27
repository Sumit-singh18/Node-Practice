const express = require('express');
const app = express();
app.get('/', (req,res) =>{
    res.send("hello from frp, express")
});
app.listen(8000,()=>{
    console.log("port 8000")
})