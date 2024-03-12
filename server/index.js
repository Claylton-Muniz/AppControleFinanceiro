const express = require('express')
const app = express()
const mysql = require('mysql')
const jwt = require('jsonwebtoken') 

const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Senha-321',
    database: 'app_controle_financeiro'
})

app.use(cors())
app.use(express.json())

app.post('/auth/local', (req, res) => {
    let sql = "SELECT * FROM users WHERE email = ? AND password = ?"
    const { email } = req.body
    const { password } = req.body

    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.log("Erro na consulta:", err);
        } else {
            if (result.length) {
                let token = jwt.sign({username: req.body.username}, 'segredo-do-token')

                res.json({
                    success: true,
                    message: 'Autenticação bem-sucedida!',
                    token: token
                })

            } else {
                res.status(401).send('caracteres invalidos!!')
            }
        }
    })

})

app.listen(1337, () => {
    console.log('run 1337!!!')
})
