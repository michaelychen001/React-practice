const http = require('http');
const port = 8999;

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello Node!');
    res.end();
}).listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});