
const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors');
const port = 3000

app.use([cors(),express.json()]);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


app.get('/grades', async (req, res) => {
    let gradesFile =fs.readFileSync('data/grades.json').toString()
    let json = JSON.parse(gradesFile)
  res.send(json)
})

