const axios=require('axios');
const express=require('express');
const {from}=require('rxjs');
const {map}=require('rxjs/operators');



var app = express();
var result;
const port =1000;

axios.get('http://jsonplaceholder.typicode.com/users/')
     .then((data)=>console.log(data)) //this prints the header information plus the body of the response obj
     .catch((err)=>console.log('error')); 

app.set('trust proxy',true);
app.set('strict routing',true);
app.enable('case sensetive routing');
app.set('x-powered-by',false);



// OPTION 1: [Using Promise]
    app.get('/users',(req,resp)=>{
        axios.get('http://jsonplaceholder.typicode.com/users/')   
             .then((data)=>{result=data.data;})
             .catch((err)=>console.log(err));
        resp.status(200);
        resp.set('Content-Type','application/json');
        resp.send(result);
        resp.end();
    });

// OPTION 2: [Using Observable]
app.get('/users',(req,resp)=>{
    from(axios.get('http://jsonplaceholder.typicode.com/users/'))
        .pipe(
            map((response)=>response.data)
        )
        .subscribe((data)=>{
            resp.status(200);
            resp.set('Content-Type','application/json');
            resp.send(data);
            resp.end();
        })
})

// OPTION 3: [Using Async ... Await]
    async function consume(){
        try{
            result = await axios.get('http://jsonplaceholder.typicode.com/users/') ;
            result = result.data;
        }catch(error){
            console.log(error);
        }
    }
    app.get('/users',(req,resp)=>{
        consume();
        resp.status(200);
        resp.set('Content-Type','application/json');
        resp.send(result);
        resp.end();
    })


app.listen(port,()=>console.log('Server is Running on PORT %s',port));
