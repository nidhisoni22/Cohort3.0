//creating a CLI based on node 
//process.argv= > helps you put the filename dynamically eg : node indexx.js and Users/Windows/C/ newfolder 
// you cant do this generally but "process.avg" -> lets you do this,it will give you access
// const fs=require('fs');
// const { mainModule } = require('process');
// function main(filename) {
//     //console.log(process.argv);
//     fs.readFile(filename,"utf-8",function(err,data){
//         let total =0;
//         for(let i=0;i<data.length;i++){
//             if(data[i] ===" "){
//                 total++;
//             }
//         }
//         console.log(total+1)
//     })
// } 
// main("a.txt")

//creatin a cli
//importing the class
const fs = require('fs');
const { Command } = require('commander');
 const program = new Command();

// program
//   .name('counter')
//   .description('CLI to do file based tasks')
//   .version('0.8.0');

// program.command('count')
//   .description('Count the number of words in a file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         let words=0;
//         for(let i=0;i<data.length;i++){
//             if(data[i] === "\n "){           // " \n"-->checks  the no sentences
//                 words++;
//             }
//         }
//         console.log(`There are ${words + 1} words in the ${file}`)
//       }
//     });
//   });

// program.parse();


///////////////////////////////////////////////*
program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count_sentences')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let sentences=0;
        for(let i=0;i<data.length;i++){
            if(data[i] === "\n"  || data[i] === '.' || data[i] === '!' || data[i] === '?'){           // " \n"-->checks  the no sentences
                sentences++;
            }
        }
        console.log(`There are ${sentences +1 } sentences in the ${file}`)
      }
    });
  });

program.parse();