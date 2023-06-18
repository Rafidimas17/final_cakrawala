const chai=require('chai')
const chaiHttp=require('chai-http')
const expect=chai.expect;
const app=require('../app')

chai.use(chaiHttp)

describe('API ENDPOINT TESTING', () => {
    it('GET Landing Page',(done)=>{
        chai.request(app).get('/api-v1/landing-page').end((err,res)=>{
            expect(err).to.be.null;
            expect(res).to.have.status(200);     
            expect(res.body).to.be.an("Object")
            expect(res.body).to.have.property("hero")
            expect(res.body.hero).to.have.all.keys('travelers','treasures','cities')
            expect(res.body).to.have.property('mostPicked')
            expect(res.body.mostPicked).to.be.an("array")
            expect(res.body).to.have.property('category')
            expect(res.body.category).to.be.an("array")
            expect(res.body).to.have.property('testimonial')
            expect(res.body.testimonial).to.be.an("object")

            done()       
        })
    })
    it('GET Detail Page',(done)=>{
        chai.request(app).get('/api-v1/detail-page/648d48b00eb6ad36d495343c').end((err,res)=>{
            expect(err).to.be.null;
            expect(res.body).to.be.an("Object")
            expect(res.body).to.have.property('categoryId')
            expect(res.body.categoryId).to.be.an('array')
            expect(res.body).to.have.property('imageId')
            expect(res.body.imageId).to.be.an('array')
            expect(res.body).to.have.property('featureId')
            expect(res.body.featureId).to.be.an('array')
            expect(res.body).to.have.property('activityId')
            expect(res.body.activityId).to.be.an('array')
            expect(res.body).to.have.property('trackId')
            expect(res.body.trackId).to.be.an('array')
            expect(res.body).to.have.property('bankId')
            expect(res.body.bankId).to.be.an('array')
            expect(res.body).to.have.property('testimonial')
            expect(res.body.testimonial).to.be.an('object')
            expect(res.body).to.have.property('currentWeather')
            expect(res.body.currentWeather).to.be.an('object')
            done()
        })
    })    
})