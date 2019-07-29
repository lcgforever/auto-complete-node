let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'auto_complete'
})

connection.connect(err => {
    if (err) {
        console.log('Cannot connect to MySQL DB: ' + err)
    } else {
        console.log('Connected to MySQL DB!')
    }
})

module.exports = connection
