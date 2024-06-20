import express,{Response} from "express"
import { appConfig } from "./2-utils/app-config"
import { productController } from "./5-controllers/product-controller"
import { logMiddleware } from "./6-middleware/logsMiddleware"
import { securityMiddleware } from "./6-middleware/securityMiddleware"
import { errorMidDleware } from "./6-middleware/errorsMiddleware"
import { userController } from "./5-controllers/user-controller"
import expressFileUpload from "express-fileupload"
import { fileSaver } from "uploaded-file-saver"
import path from "path"
import { employeeController } from "./5-controllers/employee-controllers"
import cors from "cors"

fileSaver.config(path.join(__dirname,"1-assets","images"))
const server = express()

server.use(cors())
server.use(express.json())
server.use(expressFileUpload())
server.use(logMiddleware.logRequest)
server.use(securityMiddleware.preventXssAttack)

server.use("/api",productController.router)
server.use("/api",userController.router)
server.use("/api",employeeController.router)



server.use("*" ,errorMidDleware.routeNotFound)
server.use(errorMidDleware.catchAll)

server.listen(appConfig.port,()=>{
    console.log("listening on port "+ appConfig.port)
})
