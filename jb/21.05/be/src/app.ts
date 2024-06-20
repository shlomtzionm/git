import  express  from "express"
import { appConfig } from "./2-utils/app-config"



const server = express()
server.use(express.json())




server.get("/", (req,res)=>{
  res.send("hello")
})

// server.use('/api/dogs',)
// server.use('/api/cats',)

server.listen(appConfig.port, () => {
  console.log(`server listening on port ${appConfig.port}`)
})