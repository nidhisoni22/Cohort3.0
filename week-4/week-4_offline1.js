//week-4 offline video-1 
//express and http server
//creating  a http server with express as it doesnt come with node.js install locally
const express = require("express");
const app=express();
function calculate(n){
    let ans=0;
    for(let i=0;i<=n;i++){
     ans=ans+1;
    }
    return ans;
}
app.get("/" , function(req,res){
   const n =req.query.n;
   const sum=calculate(n);
   res.send("hi ans is " +  sum);

})
app.listen(3000);