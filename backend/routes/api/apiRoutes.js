const router=require('express').Router()
const { uploadSingle } = require('../../middleware/multer');
const apiController=require('../../controllers/api/apiController')

router.get('/landing-page',apiController.viewLandingPage)
router.get('/detail-page/:id', apiController.detailPage);
router.post('/booking-page', uploadSingle, apiController.bookingPage);
module.exports=router;  