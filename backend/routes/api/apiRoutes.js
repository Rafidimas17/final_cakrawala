const router=require('express').Router()

const apiController=require('../../controllers/api/apiController')

router.get('/landing-page',apiController.viewLandingPage)
router.get('/detail-page/:id', apiController.detailPage);

module.exports=router;  