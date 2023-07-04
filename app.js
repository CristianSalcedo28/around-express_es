import express  from "express";
import fs from "fs"
import path from "path"

const app = express()

app.get('/', (req, res)=> {
    res.status(404).send('<h1>Página no encontrada</h1>');
})

app.get('/data/cards.js', (req, res)=> {
    const dataPath = path.join(__dirname, 'data/cards.js');

    fs.readFile(dataPath, { encoding: 'utf8' }, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
    
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
    
})

app.get('/data/users.js', (req, res)=> {
    const dataPath = path.join(__dirname, 'data/cards.js');
})

app.listen(3000)