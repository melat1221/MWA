
let x=[5,6,5,4,3,4,2,1,1]

//ES6 features
function removeDuplicates(a){
    
     const m=a.reduce(function(b,e,i){
if(!(b.includes(e)))
b.push(e);
return b;

},[]);
    
    return m;
    
}

let newArr=removeDuplicates(x);
console.log(newArr);



