const http = require("http");
const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "application/json")
    response.write(JSON.stringify({"status":"ok"}))
    console.log("server is running")
    response.end()
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000")
})