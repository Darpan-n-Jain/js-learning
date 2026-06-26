const http = require("http");
const fs = require("fs")
const url = require("url");

const myserver = http.createServer((req, res) =>{
    if (req.url === "/favicon.ico") return res.end();
    const log =`${Date.now()}: ${req.method} ${req.url} new req recived \n`;
        const myurl = url.parse(req.url, true);
        console.log(myurl);
    fs.appendFile("log.txt", log ,(err , data) => {
    // res.end("hello fom darpan");
    switch (myurl.pathname) {
        case "/":
            if (runInNewContext.method === 'GET') req.end("Home page")
            break;
        case "/about":
            const username = myurl.query.myname
        res.end(`Hi, ${username}`);
        break;
        case "/search" :
        const search = myurl.query.search_queary;
        res.end("here is result for" + search);
        case '/singup':
            if (req.method === "GET") res.end("this is singup form");
            else if (req.method === "POST"){
                //db query
                res.end("success");
            }
        default:
            res.end("eror404");
            break;
    }
    });
});

myserver.listen(8000, () => console.log("server started."));