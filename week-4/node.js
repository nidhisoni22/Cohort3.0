//creating a CLI based on node 
//process.argv= > helps you put the filename dynamically eg : node indexx.js and Users/Windows/C/ newfolder 
// you cant do this generally but "process.avg" -> lets you do this,it will give you access
const fs=require('fs');
const { mainModule } = require('process');
function main(filename) {
    //console.log(process.argv);
    fs.readFile(filename,"utf-8",function(err,data){
        let total =0;
        for(let i=0;i<data.length;i++){
            if(data[i] ===" "){
                total++;
            }
        }
        console.log(total+1)
    })
}
main("a.txt")
