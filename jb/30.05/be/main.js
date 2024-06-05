
const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'products'
  })

db.connect()

app.use([cors(),express.json()])

app.get('/product', (req, res) => {
    if (req.params.product_id ){
        db.query(`SELECT * FROM products WHERE like '%${req.params.product_id}'` , (err, rows)=>{
            if (err) throw err
            res.send(rows)
        })

    }

    db.query(`SELECT * FROM products`, (err, rows)=>{
        if (err) throw err
        res.send(rows)
    })
})


app.get('/orders', (req, res) => {
    if (req.params.product_id ){
        db.query(`SELECT * FROM products WHERE like '%${req.params.product_id}'` , (err, rows)=>{
            if (err) throw err
            res.send(rows)
        })

    }

    db.query(`SELECT * FROM products`, (err, rows)=>{
        if (err) throw err
        res.send(rows)
    })
})

app.post('/newOrder', (req, res) => {
    db.query(`INSERT INTO orders (create_time, oder_number, product_id) VALUES (${new Date().getTime()},3333,${req.body.id})`,
     (err, rows)=>{
        if (err) throw err
        res.send(rows)
    })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})