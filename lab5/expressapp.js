var express = require('express');
var axios = require('axios');
const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs');
const { map, filter, switchMap } = require('rxjs/operators');
var app = express();

app.enable('trust proxy');
app.disable('x-powered-by');
app.enable('case sensitive routing');
app.enable('strict routing');





// Observable
// app.get('/users', function (req, res) {
//     from(axios.get('http://jsonplaceholder.typicode.com/users'))
//         .pipe(
//             map(output => output.data)
//         )
//         .subscribe((output) => {
//             console.log(output);
//             res.send(output);
//             res.end();
//         });
// });


// Promise
// app.get('/users', function (req, res) {
//     axios.get('http://jsonplaceholder.typicode.com/users')
//         .then(function (response) {
//             //console.log(response);
//             res.send(JSON.stringify (response.data));
//             res.end();

//         })
//         .caxtch(function (error) {
//             console.log(error);
//         });
// });

app.get('/users', function (req, res) {
    myFunction();
    async function myFunction() {
        try {
            var users = await axios.get('http://jsonplaceholder.typicode.com/users');
            res.send(users.data);
            res.end();
        } catch(e){
            console.log('ERROR: '+ e)
        }
    }
});

app.listen(5000, () => console.log("Server Started on 5000..."));