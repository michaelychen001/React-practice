var express = require('express');
var app = express();
const fs = require('fs');
app.use(express.json());

app.get('/json_file', (req, res) => {
    try {
        let data = fs.readFileSync(`${__dirname}/${req.query.name}.json`)
        res.json(JSON.parse(data));
    } catch (err) {
        console.error(err);
        res.send({'error': err.toString()});
    }
});

app.post('/json_file', (req, res) => {
    try {
        const fileName = __dirname + '/' + req.query.name + '.json';
        bodyData = req.body;
        fs.open(fileName, 'r', (err, fd) => {
            if (err) {
                fs.writeFile(fileName, JSON.stringify(bodyData), (err) => { if (err) console.log(err); }); // Create new file
            } else {
                let fileContent = JSON.parse(fs.readFileSync(fileName, 'utf8')); // Read file content
                Object.keys(bodyData).forEach( (key) => {fileContent[key] = bodyData[key];});
                fs.writeFileSync(fileName, JSON.stringify(fileContent)); // Write content to the file
            }
        })
        res.send({'success': 'File successfully updated.'})
    } catch (err) {
        console.log(err);
        res.send({'error': 'Update json file failed.'})
    }
})

app.delete('/json_file', (req, res) => {
    try {
        fs.unlinkSync(__dirname + "/" + req.query.name + '.json');
        res.send({'success': 'File deleted.'})
    } catch (err) {
        console.log(err);
        res.send({'error': 'Delete file failed.'})
    }
});

const port = 8999;
app.listen(port, ()=>{
    console.log(`Express homework at http://localhost:${port}`)
})