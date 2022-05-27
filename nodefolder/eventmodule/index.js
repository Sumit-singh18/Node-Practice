const EventEmitter = require('events');
const event = new EventEmitter();



// create an event emitter and register a multiplr call back 
event.on("say my name",()=>{
    console.log("your name is sumit")
})
event.on("say my name",()=>{
    console.log("your name is snehal")
})
event.on("say my name",()=>{
    console.log("your name is vidhi")
})
event.emit("say my name");

// register for the event with call back parametr
event.on("checkpage",(sc,msg)=>{
    console.log(`page status is  ${sc} and result is ${msg} ` )

})

event.emit("checkpage",200,"success")