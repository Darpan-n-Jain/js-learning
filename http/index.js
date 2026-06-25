const http = require("http");
const fs = require("fs")

const myserver = http.createServer((req, res) =>{
    const log =`${Date.now()}: ${req.url} new req recived \n`;
    fs.appendFile("log.txt", log ,(err , data) => {
    // res.end("hello fom darpan");
    switch (req.url) {
        case "/":
            res.end("home page");
            break;
        case "/about":
        res.end("I am darpan jain");
        break;
        default:
            res.end("eror404");
            break;
    }
    });
});

myserver.listen(8000, () => console.log("server started."));