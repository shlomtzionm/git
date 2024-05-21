
const express = require('express')
 const app = express()
const port = 3000
const cors = require("cors")
  const fs = require("fs")

app.use([cors(),express.json(),(req, res, next)=>{
    fs.appendFileSync('data/log.log',
        `${req.originalUrl} ${new Date().toISOString()}\n`
    )

    next()
}])

const countLogs =()=>{
  const file = fs.readFileSync('data/log.log').toString()
  const logs = file.split('\n').filter(line => line.trim() !== '')
  let paths = logs.map(log => log.split(' ')[0])
 
  let counter = {}
  paths.forEach((log)=>{
      if (!counter[log]){
counter[log] = 1
      } else {
        counter[log]+=1
      }
  })
return counter
}

app.get("/logs", (req,res)=>{
  res.send(countLogs())
})

app.use('/api/dogs',require("./routes/dogs"))
app.use('/api/cats',require("./routes/cats"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})