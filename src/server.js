import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()

class Server{

    constructor(){
        this.app= express();
        this.server();
        this.routes();
        this.PORT= process.env['PORT']
    }

    routes(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    server(){
        this.app.listen(this.PORT,()=>{
            console.log("Server initialized in port " + this.PORT)
        })
    }
}
export default new Server()