/* 
27-11
*/
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Content-Type', 'text/html');
    next()
});

app.use((req, res, next) => {
    const username = req.body.username || 'Unknown User'
    res.render('index', {
        user : username
    })
})
app.listen(3000);


