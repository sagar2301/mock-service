const express = require('express')
const app = express()
const outputjson = {'choko':'lava'}


app.get('/choko', (req, res) => res.send(outputjson))

app.listen(3000, () => console.log('Example app listening on port 3000!'))