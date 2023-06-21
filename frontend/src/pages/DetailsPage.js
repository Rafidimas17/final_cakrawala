import Header from "../parts/Header";
import { connect } from "react-redux";
import React, { Component } from "react";
import itemDetails from "../json/itemDetails.json";
import PageDetailTitle from "../parts/PageDetailTitle";
import FeaturedImage from "../parts/FeaturedImage";
import PageDetailDescription from "../parts/PageDetailDescription";
import Weather from "../parts/weather";
import Footer from "../parts/Footer";
import BookingForm from "../parts/BookingForm";
import Activities from '../parts/Activites'
import Testimony from "../parts/Testimony";
import { checkoutBooking } from "../store/actions/Checkout";
import { fetchPage } from "../store/actions/page";
// import { fetchPage } from "./store/actions/page";
class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
    if(!this.props.page[this.props.match.params.id])
    this.props.fetchPage(`${process.env.REACT_APP_HOST}/api-v1/detail-page/${this.props.match.params.id}`,this.props.match.params.id).then((response)=>{
      console.log(response)
    })
  }
  render() {
    const {page,match}=this.props
    console.log(this.props)
    if(!page[match.params.id])return null
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Mountain Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
        <Weather  data={page[match.params.id].currentWeather}/>
        <FeaturedImage data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={page[match.params.id]} />
            </div>
            <div className="col-5">
              <BookingForm itemDetails={page[match.params.id]} startBooking={this.props.checkoutBooking} />
            </div>
          </div>
        </section>
        <Activities data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}


const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);