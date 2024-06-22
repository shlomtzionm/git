import  express  from "express"
import { appConfig } from "./2-utils/app-config"
import cors from "cors"
import { productController } from "./5-controllers/product-controller"



const server = express()
server.use(cors())
server.use(express.json())


server.use('/api', productController.router)
// server.use('/api/cats',)

server.listen(appConfig.port, () => {
  console.log(`server listening on port ${appConfig.port}`)
})