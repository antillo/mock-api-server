import { Router } from "express";


const router = Router()

router.post('/jbmp_post_nodes',(req,res)=>{res.status(200).json()})
router.post('/mminventory_delete_processid',(req,res)=>{res.status(200).json()})
router.post('/mminventory_service_merge_characteristics',(req,res)=>{res.status(200).json()})
router.post('/jbpm_get_signal',(req,res)=>{res.status(200).json()})
router.post('/instances',(req,res)=>{res.status(200).json()})
router.post('/mminventory_change_product_order',(req,res)=>{res.status(200).json()})
router.post('/jbmp_post_signal',(req,res)=>{res.status(200).json()})

export default router