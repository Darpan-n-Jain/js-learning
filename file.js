const fs = require("fs");
fs.writeFileSync('./test.txt',"hey i am darpan"); //used to create file sync..

fs.writeFile("./test2.txt","hello", (err) => {} ); //create file async

const result =fs.readFileSync("./contacts.txt","utf-8") // read file in sync
console.log(result);
console.log("read file async")

fs.readFile("./contacts.txt","utf8",(err, result2) => {
    if (err){
        console.log("Error", err);
    }else {
        console.log(result2)
    }
}); // read file ansync


fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());//how to append in file
fs.appendFileSync("./test.txt","hey \n");

fs.cpSync("./test.txt","./copy.txt"); //copying file

fs.unlinkSync("./copy.txt"); //deleating file

console.log(fs.statSync("./test.txt")); // to see stats of a file