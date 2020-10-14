//27-5
/* now we will work on http requests and how the servers responds to such request.
-First we have to require the http module.
- it will allow us to use the methods available inside that module.
-it enables us to create http request and send send them.
- recieve http request and send them to another server
- this is what the webpack dev servers and other development servers do. they use node.js to set up a basic web server
which runs locally on your system to host your html files. but you can not write any serverside logic on those servers.
they just servers those html files.
*/


const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html') //we set the header to tell browser what type of content we are sending as response
    res.write('<h1>hello there !!<h1>');
    res.end()
});

server.listen(9000);