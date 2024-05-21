
const express = require('express')
 const app = express()
const port = 3000
const cors = require("cors")
  const fs = require("fs")

app.use([cors(),express.json(),(req, _, next)=>{
    fs.appendFileSync('data/log.log',
        `${req.originalUrl} ${new Date().toISOString()}\n`
    )
    next()
}])




app.use('/api/dogs',require("./routes/dogs"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})