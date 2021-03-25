const express = require('express');
const app = express();
require('./models/dbConfig');

app.get('/helloWorld', function (req, res) {
    res.send('Hello World !!')
})

app.listen(5500,()=>('Server POC Backend started: 5500'));