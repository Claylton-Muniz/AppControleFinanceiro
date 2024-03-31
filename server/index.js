import express from 'express'
import mysql from 'mysql'
import jwt from 'jsonwebtoken'
import cors from 'cors'

const app = express()

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
    const { email, password } = req.body

    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.log("Erro na consulta:", err)
        } else {
            if (result.length) {
                // Mudar o segredo de token e colocar uma var ambiente
                let token = jwt.sign({id: result[0].id}, 'appFinanceiro')

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

app.get('/api/users', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]

    jwt.verify(token, 'appFinanceiro', (err, decoded) => {
        if (err) {
            res.status(401).json({message: 'Token inválido'})
        } else {
            const userId = decoded.id

            let sql = "SELECT * FROM users WHERE id = ?"

            db.query(sql, [userId], (err, result) => {
                if (err) {
                  console.log("Erro na consulta:", err)
                } else {
                  res.json(result[0])
                }
            })
        }
    })
})

app.post('/api/users', (req, res) => {
    let sql = "INSERT INTO users (username, email, password, dob) VALUES (?, ?, ?, ?)"
    const { name, email, password, dob } = req.body

    const date = `${dob.year}-${dob.month}-${dob.day}`

    console.log(name, email, password, date)

    db.query(sql, [name, email, password, date], (err, result) => {
        if (err) {
            console.log("Erro na consulta:", err)
        } else {
            console.log("Dados enviados com sucesso!!!")
            res.json({message: 'Dados enviados com sucesso!!!'})
        }
    })
})

app.get('/api/bank-accounts', (req, res) => {
    const token = req.headers.authorization.split(' ')[1]

    jwt.verify(token, 'appFinanceiro', (err, decoded) => {
        if (err) {
            res.status(401).json({message: 'Token inválido'})
        } else {
            const userId = decoded.id

            let sql = "SELECT * FROM bank_account WHERE id_user = ?"

            db.query(sql, [userId], (err, result) => {
                if (err) {
                  console.log("Erro na consulta:", err)
                } else {
                  res.json(result)
                }
            })
        }
    })

})

app.post('/api/bank-accounts', (req, res) => {
    let sql = "INSERT INTO bank_account (id_user, name, saldo) VALUES (?, ?, ?)"
    const { idUser, name, saldo } = req.body

    db.query(sql, [idUser, name, parseFloat(saldo)], (err, result) => {
        if (err) {
            console.log("Erro na consulta:", err)
        } else {
            console.log("Dados enviados com sucesso!!!")
            res.json({message: 'Dados enviados com sucesso!!!'})
        }
    })
})

app.post('/api/bank-cards', (req, res) => {
    let sql = "INSERT INTO bank_cards (id_conta, tipo, limite) VALUES (?, ?, ?)"
    const { idAccount, tipo, limite } = req.body

    db.query(sql, [idAccount, tipo, parseFloat(limite)], (err, result) => {
        if (err) {
            console.log("Erro na consulta:", err)
          } else {
            console.log("Dados enviados com sucesso!!!")
            res.json({message: 'Dados enviados com sucesso!!!'})
          }
    })
})

app.listen(1337, () => {
    console.log('run 1337!!!')
})
