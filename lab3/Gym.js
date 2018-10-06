var EventEmmiter = require('events');

class Clock extends EventEmmiter {
    constructor(){
        super();
    }
}

var clock = new Clock();
clock.on('go', ()=>{
   
     setInterval(() => {
         console.log('Atlete is working out');
     }, 1000);
});

clock.emit('go');