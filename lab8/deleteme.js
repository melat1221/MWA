import {Observable, of} from 'rxjs';
import {map, filter} from 'rxjs/operators';

const {Observable, of} = require('rxjs');
const {map, filter} = require('rxjs.operators');
of(1,2,3).pipe(
    map((n)=>n+3),
    filter((n)>=2)
)
.subscribe(
    (x)=>{console.log(x)},
    null,
    ()=>{console.log("Done")}
)