const http = require("http");

let numbers = { a: 5, b: 7 }; // stored numbers

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // Main page: show stored numbers as JSON
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(numbers));
  } 
  else if (req.method === "GET" && req.url === "/sum") {
    // Serve an HTML page that POSTs numbers automatically
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <html>
        <body>
          <h1>Sum Page</h1>
          <pre id="result"></pre>
          <script>
            const numbers = ${JSON.stringify(numbers)};
            fetch('/sum', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(numbers)
            })
            .then(res => res.json())
            .then(json => {
              document.getElementById('result').textContent = JSON.stringify(json);
            })
            .catch(err => {
              document.getElementById('result').textContent = 'Error: ' + err;
            });
          </script>
        </body>
      </html>
    `);
  } 
  else if (req.method === "POST" && req.url === "/sum") {
    // Handle the POST request and return the sum as JSON
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        const sum = data.a + data.b;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ sum }));
      } catch (err) {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  } 
  else {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
