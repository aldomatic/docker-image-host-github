const express = require('express')
const os = require('os')

const app = express()
app.get('/', (req, res) => {
        res.send(`Hi, Oliver from pod(V3):  ${os.hostname()}!`)
})

const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`))