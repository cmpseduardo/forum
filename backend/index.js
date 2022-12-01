const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()
app.use(cors())

const conexaoDB = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'forum'
})

app.listen(3000, () => {
    console.log("Respondendo na porta 3000")
})