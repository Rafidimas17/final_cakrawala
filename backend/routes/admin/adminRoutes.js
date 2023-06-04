const express=require('express')
const router=express.Router()
const adminController=require('../../controllers/admin/adminController')
const {upload}=require('../../middleware/multer')
router.get('/dashboard',adminController.viewDashboard)

// Endpoint category
router.get('/category',adminController.viewCategory)
router.post('/category',adminController.addCategory)
router.put('/category',adminController.editCategory)
router.delete('/category/:id',adminController.deleteCategory)

// Endpoint bank
router.get('/bank',adminController.viewBank)
router.post('/bank',upload,adminController.addBank)
router.put('/bank',upload,adminController.editBank)
router.delete('/bank/:id',upload,adminController.deleteBank)

//Endpoint Item
router.get('/item',adminController.viewItem)
router.get('/booking',adminController.viewBooking)

module.exports=router;