const express = require('express');

const app = express();

app.use((req, res, next)=>{
    res.header('Content-Type', 'text/html');
    next()
});

app.use((req, res, next)=>{
    res.send('<h1>hello world</h1>')
})
app.listen(3000);

