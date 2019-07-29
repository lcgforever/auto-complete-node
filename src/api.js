let express = require('express')
let url = require('url')
let dbConnection = require('./db.js')
let router = express.Router()

router.get('/query', (req, res) => {
    let params = url.parse(req.url, true).query
    let queryStatement = 'SELECT following_word FROM words WHERE starting_phrase LIKE "' + params.word + '" ORDER BY count DESC'
    dbConnection.query(queryStatement, (err, result, fields) => {
        if (err) {
            console.log('Query DB failed: ' + err)
            res.status(500).send('Query DB failed: ' + err)
        } else {
            let response = result.map(data => {
                return data.following_word
            })
            res.status(200)
                .header('Access-Control-Allow-Origin', 'http://localhost:3000')
                .send(JSON.stringify(response))
        }
    })
})

module.exports = router
