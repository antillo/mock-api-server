import { Router } from "express";
import { JmbpPostNodesController } from "../controllers/jbmp_post_nodes";

export class JmbpPostNodes {
    router = Router()
    controller = new JmbpPostNodesController()
    constructor(){
        
        this.routes()
    }



    routes(){
        this.router.get('/:rfs/:node',(req,res)=>{this.controller.getNodes(req,res)})
        this.router.post('/:rfs/:node',(req,res) =>{ this.controller.postNodes(req,res)})
    }
}