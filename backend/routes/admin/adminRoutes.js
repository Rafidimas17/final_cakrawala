const express=require('express')
const router=express.Router()
const adminController=require('../../controllers/admin/adminController')
const {uploadSingle,uploadMultiple}=require('../../middleware/multer')
router.get('/dashboard',adminController.viewDashboard)

// Endpoint category
router.get('/category',adminController.viewCategory)
router.post('/category',adminController.addCategory)
router.put('/category',adminController.editCategory)
router.delete('/category/:id',adminController.deleteCategory)

// Endpoint bank
router.get('/bank',adminController.viewBank)
router.post('/bank',uploadSingle,adminController.addBank)
router.put('/bank',uploadSingle,adminController.editBank)
router.delete('/bank/:id',uploadSingle,adminController.deleteBank)

//Endpoint Item
router.get('/item',adminController.viewItem)
router.post('/item',uploadMultiple,adminController.addItem)
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/:id', uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

module.exports=router;