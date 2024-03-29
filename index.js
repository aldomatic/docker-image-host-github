const express = require('express')
const os = require('os')

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express()
app.get('/', (req, res) => {
    res.send(`Hola, from pod:  <strong>${os.hostname()}</strong>`)
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);