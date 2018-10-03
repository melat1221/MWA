

var applyCoupon=function(category){
return function(discount){
        return function(item){
            if(item.category===category){
                item.price=item.price-(item.price*discount);
                return item;
                           }
            else{
                return {};
            }
               
        }
}
}
const item = {
    "name":"Biscuits",
    "type" :"Regular",
    "category":"Food",
    "price":2.0
}


console.log(applyCoupon("Food")(0.1)(item).price===1.8);

