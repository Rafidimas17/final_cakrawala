const express=require('express')
const router=express.Router()
const adminController=require('../../controllers/admin/adminController')

router.get('/dashboard',adminController.viewDashboard)

module.exports=router;