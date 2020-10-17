//27-7
/* 
-we recieve data as request.
-req.on is like the addeventlistener in browser. it looks for incoming request and recieves them.
-the 'data' argumnet is like the 'click' in eventlintener. it tell which kind of request it is and if it has any data.
 it tells its a request containing data.
-req.on is asychronous. so the res method would not wait for the req.on to complete. thata why we have to put 
 res inside req.on method so that it runs once the request is recieved and server is done with processing the 
 request data.
*/

const http = require('http');

const server = http.createServer((req, res) => {
    let body = [];

    req.on('data', (chunk) => { // this is asychronous 
        body.push(chunk);
    });
    req.on('end', () => { // this is asychronous 
        body = Buffer.concat(body).toString();
        console.log(body);
        let username = 'Unknown user';
        if(body){
            username = body.split('=')[1];
        }
        
        console.log('Request method : ' + req.method)
        console.log('Request Url : ' + req.url)
        res.setHeader('Content-Type', 'text/html')
        res.write(`
        <form method="post" action="/" > 
            <input type="text" name="username" placeholder="type your name"> 
            <button type ="submit"> Send </button>
        </form>
        <h1>Hi ${username} </h1>`);
        res.end()
    });
});

server.listen(9000);