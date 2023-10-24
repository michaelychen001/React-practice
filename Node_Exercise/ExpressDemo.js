
var express = require('express');
var app = express();

app.get('/json_data', function (req, res){
    const data = require('./data.json');
    res.json(data);
});

const port = 8998;
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})