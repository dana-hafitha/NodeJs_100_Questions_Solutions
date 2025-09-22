const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  if (pathname === '/greet' && req.method === 'GET') {
    const name = query.name || 'USER'; 
    res.end(`Hello, ${name}.`);

  } else {
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});