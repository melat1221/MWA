
let x=[5,6,5,4,3,4,2,1,1];

function removeDuplicates(a){
    
     const m=a.reduce(function(b,e,i){
if(!(b.includes(e)))
b.push(e);
return b;

},[]);
    
    return m;
    
}


async function rmvdupAsychWait(arr){
    try{
         const result=await removeDuplicates(arr);
    
        console.log(`result from Aysch and wait: ${result}`)

        
    }
    catch(err){
        console.log(err);
}
    
   


}

rmvdupAsychWait(x);
console.log("removing duplicates in progress");