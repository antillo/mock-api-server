import { Router } from "express";

import { JmbpPostNodes } from "./jbmp_post_nodes";


const router = Router()


router.use('/jbmp_post_signal', new JmbpPostNodes().router)

export default router