import express from "express";
import { engine } from "express-handlebars";
import userRoutes from "./routes/user.routes"
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',userRoutes)
app.listen(9090,()=>{
    console.log('server has been started on port 9090... ')
})