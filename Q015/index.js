const http = require('http');

http.createServer((req, res) => {
    const url = req.url;

    if (url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Hello');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
    }
}).listen(3000, () => {
    console.log("Server started on port 3000");
});