const http = require('http');
const port = 9000;
const server = http.createServer((req, res) => {
    res.statusCodeCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello world!');
});
server.listen(port, () => {
    console.log(`server is running on the port ${port}`);

})
