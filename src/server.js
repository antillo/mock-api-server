import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import * as dotenv from 'dotenv'

import BaseRouter from './routes'

dotenv.config()

class Server{

    constructor(){
        this.app= express();
        this.PORT= process.env['PORT']
        this.middleware();
        this.routes();
        this.server();
    }

    middleware()
    {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(helmet())
    }
    routes(){
       
        this.app.use('/bostprov',BaseRouter)
    }

    server(){
        this.app.listen(this.PORT,()=>{
            console.log("Server initialized in port " + this.PORT)
        })
    }
}
export default new Server()