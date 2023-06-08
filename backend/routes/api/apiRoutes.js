const router=require('express').Router()

const apiController=require('../../controllers/api/apiController')

router.get('/landing-page',apiController.viewLandingPage)
router.get('/detail-page/:id', apiController.detailPage);
router.post('/booking-page/',apiController.bookingPage);
module.exports=router;  