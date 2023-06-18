const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require("../app");
const fs = require("fs");

chai.use(chaiHttp);

describe("API ENDPOINT TESTING", () => {
  it("GET Landing Page", (done) => {
    chai
      .request(app)
      .get("/api-v1/landing-page")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("Object");
        expect(res.body).to.have.property("hero");
        expect(res.body.hero).to.have.all.keys(
          "travelers",
          "treasures",
          "cities"
        );
        expect(res.body).to.have.property("mostPicked");
        expect(res.body.mostPicked).to.be.an("array");
        expect(res.body).to.have.property("category");
        expect(res.body.category).to.be.an("array");
        expect(res.body).to.have.property("testimonial");
        expect(res.body.testimonial).to.be.an("object");

        done();
      });
  });
  it("GET Detail Page", (done) => {
    chai
      .request(app)
      .get("/api-v1/detail-page/648d48b00eb6ad36d495343c")
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.be.an("Object");
        expect(res.body).to.have.property("categoryId");
        expect(res.body.categoryId).to.be.an("array");
        expect(res.body).to.have.property("imageId");
        expect(res.body.imageId).to.be.an("array");
        expect(res.body).to.have.property("featureId");
        expect(res.body.featureId).to.be.an("array");
        expect(res.body).to.have.property("activityId");
        expect(res.body.activityId).to.be.an("array");
        expect(res.body).to.have.property("trackId");
        expect(res.body.trackId).to.be.an("array");
        expect(res.body).to.have.property("bankId");
        expect(res.body.bankId).to.be.an("array");
        expect(res.body).to.have.property("testimonial");
        expect(res.body.testimonial).to.be.an("object");
        expect(res.body).to.have.property("currentWeather");
        expect(res.body.currentWeather).to.be.an("object");
        done();
      });
  });
  it("POST Booking Page", (done) => {
   
    const image = __dirname+ '/buktibayar.png';
    const dataSample = {
      image,
      idItem: "648d48b00eb6ad36d495343c",
      duration: 3,
      startDateBooking: "2023-06-15",
      endDateBooking: "2023-06-18",
      bankName: "Bank BCA",
      nameAccountBank: "John Doe",
      members: [
        {
          nameMember: "Jane Smith",
          addressMember: "123 Main St",
          noIdMember: "21123456789",
          phoneMember: "987654321",
        },
        {
          nameMember: "John Doe",
          addressMember: "456 Elm St",
          noIdMember: "3987654321",
          phoneMember: "123456789",
        },
      ],
    };
    chai
      .request(app)
      .post("/api-v1/booking-page/")
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .field("idItem", dataSample.idItem)
      .field("duration", dataSample.duration)
      .field("startDateBooking", dataSample.startDateBooking)
      .field("endDateBooking", dataSample.endDateBooking)
      .field("bankName", dataSample.bankName)
      .field("nameAccountBank", dataSample.nameAccountBank)
      .field("nameAccountBank", dataSample.nameAccountBank)
      .field("members[0][nameMember]", dataSample.members[0].nameMember)
      .field("members[0][addressMember]", dataSample.members[0].addressMember)
      .field("members[0][noIdMember]", dataSample.members[0].noIdMember)
      .field("members[0][phoneMember]", dataSample.members[0].phoneMember)
      .field("members[1][nameMember]", dataSample.members[1].nameMember)
      .field("members[1][addressMember]", dataSample.members[1].addressMember)
      .field("members[1][noIdMember]", dataSample.members[1].noIdMember)
      .field("members[1][phoneMember]", dataSample.members[1].phoneMember)
      .attach('image', fs.readFileSync(dataSample.image), 'buktibayar.png')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });
});
