const express = require('express')
const app = express()
const mysql = require('mysql')

const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Senha-321',
    database: 'test'
})

app.use(cors())
app.use(express.json())

app.get('/rota-test', (req, res) => {
    let sql = "SELECT * FROM chegou_funfou"

    db.query(sql, (err, result) => {
        if (err) {
            console.log("Erro na consulta:", err);
        } else {
            res.send(result)
        }
    })
})

app.listen(1337, () => {
    console.log('run 1337!!!')
})
