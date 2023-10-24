var express = require('express');
var app = express();

const fs = require('fs');

app.use(express.json());

app.get('/json_file', function (req, res) {
    const fileName = req.query.name;
    const data = require(`./${fileName}.json`);
    res.json(data);
});

app.post('/json_file', function (req, res) {
    const fileName = req.query.name;
    bodyData = req.body;
    fs.stat(`./${fileName}.json`, (err, stats) => {
        if (err) {
            // the file is not existing, creating new file
            fs.writeFile(`./${fileName}.json`, JSON.stringify(bodyData), 'utf8', (err) => {
                if (err) {
                    console.error('Error writing JSON file:', err);
                } else {
                    console.log('JSON file created successfully.');
                }
            });
        } else {
            // show the content
            const data = require(`./${fileName}.json`);
            res.json(data);
        }
    });
});

app.delete('/json_file', function(req, res) {
    const fileName = req.query.name;
    fs.stat(`./${fileName}.json`, (err, stats) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.log('File does not exist, nothing to delete.');
            } else {
                console.error('Error checking file:', err);
            }
        } else {
            // unlink the file
            fs.unlink(`./${fileName}.json`, (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                } else {
                    console.log('File deleted successfully.');
                }
            });
        }
    });
});

const port = 8999;
app.listen(port, ()=>{
    console.log(`Express homework at http://localhost:${port}`)
})