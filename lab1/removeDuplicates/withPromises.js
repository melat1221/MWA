
let x=[5,6,5,4,3,4,2,1,1]


function removeDuplicates(a){
    
     const m=a.reduce(function(b,e,i){
if(!(b.includes(e)))
b.push(e);
return b;

},[]);
    
    return m;
    
}
const promis=function(arr){
      
      return new Promise(function(resolve,reject){
          const result=removeDuplicates(arr);
          if(result)
             resolve(result);
          else
              reject(new Error());
      });
    
}

promis(x)
    .then(result=>console.log(`result from promises: ${result}` ))
    .catch(err=>console.error(err));

console.log("removing duplicates in progress");