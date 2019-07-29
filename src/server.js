let express = require('express')
let apiRouter = require('./api.js')
let app = express()

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.use('/api', apiRouter)

app.listen(8080)
