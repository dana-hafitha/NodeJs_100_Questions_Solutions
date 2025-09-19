const http = require("http");

const server = http.createServer((request, response) => {
    response.end()
})

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 3000}`)
})


// To run the server, use the command: node index.js
// and to change the port use the command: $env:PORT=5000 node index.js