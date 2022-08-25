import express from 'express';
import {loadData} from './index';
const app = express();
const port = 3000;


console.log(loadData);
let a="";
async function run() {
    const data = await loadData();
    console.log("a"+data);
    a=data; // will print your data
  }

  run();

setTimeout(() => {
    app.get('/', (req, res)=>{ 
        res.send(a);
    });
    
    app.get('/token', (req, res)=>{
        res.send("b");
    });
    
    app.listen(port,()=>{
        console.log(`connect ${port}`);
    });


 }, 5000);

