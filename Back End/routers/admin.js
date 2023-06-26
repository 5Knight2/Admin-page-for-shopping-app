const admin_controller=require('../controller/admin')
const express=require('express');

const router=express.Router()

router.get('/',admin_controller.get);

router.post('/',admin_controller.add);

router.get('/:id',admin_controller.delete)

module.exports=router;
