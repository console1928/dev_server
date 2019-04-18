const fs = require("fs");
const http = require("http");

const server = http.createServer(
    function (request, response) {
        console.log(request.method, request.url);
        if (request.url === "/style.css") {
            const style = fs.readFileSync("style.css", "utf8");
            response.end(style);
        } else {
            const index = fs.readFileSync("index.html", "utf8");
            response.end(index);
        }
    }
);

server.listen(process.env.PORT || 3000);
console.log("server started");