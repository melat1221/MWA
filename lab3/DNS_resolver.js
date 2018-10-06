
var dns = require('dns');
const { promisify } = require('util');


//Dns node using resolve4

dns.resolve4('www.mum.edu' , function(err,res){
    if(err) throw err;
    console.log('dns response output:',res);    
});

//Rewriting using Promisify Object

promisify(dns.resolve4)('www.mum.edu').then((res)=>console.log('dns output using promisify:',res));

//Rewriting using Promisify async/wait

const dnssync= promisify(dns.resolve4);

async function Promiseusingasyncwait(){
    try {
        var output= await dnssync('www.mum.edu');
        console.log('dns ouput using async/wait:',output);        
    } catch(err){
        console.log('ERROR:',err);
    }
}

Promiseusingasyncwait();