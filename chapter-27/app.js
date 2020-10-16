/* 
27-10
*/
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Content-Type', 'text/html');
    next()
});

app.use((req, res, next) => {
    const username = req.body.username || 'Unknown User'
    res.send(`
    <form method="post" action="/" > 
        <input type="text" name="username" placeholder="type your name"> 
        <button type ="submit"> Send </button>
    </form>
    <h1>Hi ${username} </h1>`)
})
app.listen(3000);
