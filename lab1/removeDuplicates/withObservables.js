
let x=[5,6,5,4,3,4,2,1,1];
let result=[];


const{Observable,from}= require('rxjs');

from(x)
.subscribe(r=>{if(!result.includes(r))
    result.push(r);
    })
console.log(result);
