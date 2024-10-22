//week-4 offline video-1 
//express and http server
//creating  a http server with express as it doesnt come with node.js install locally
// const express = require("express");
// const app=express();
// function calculate(n){
//     let ans=0;
//     for(let i=0;i<=n;i++){
//      ans=ans+1;
//     }
//     return ans;
// }
// app.get("/" , function(req,res){
//    const n =req.query.n;
//    const sum=calculate(n);
//    res.send("hi ans is " +  sum);

// })
// app.listen(3000);

const express=require("express")
const app=new express()
const users=[{
    name: "john",
    kidneys:[{
        healthy:true
    }]
}];
app.use(express.json());

app.get("/",function(req,res){
    const johnkidney=users[0].kidneys;
    const noofkidney=johnkidney.length;
    const healthykidney= johnkidney.filter(kidney =>kidney.healthy)
       res.send(`the no of healthy kidneys are ${healthykidney.length}`)
    
});
app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
          healthy:ishealthy
    })
    res.json({
        msg:"done"
    })
    
})
app.listen(3000,()=>{
    console.log("server listening at port 3000")
})