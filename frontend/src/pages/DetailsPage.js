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
import Categories from "../parts/Categories";
import Testimony from "../parts/Testimony";
import { checkoutBooking } from "../store/actions/Checkout";
// import { fetchPage } from "./store/actions/page";
class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Mountain Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
        <Weather  data={itemDetails}/>
        <FeaturedImage data={itemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={itemDetails} />
            </div>
            <div className="col-5">
              <BookingForm itemDetails={itemDetails} startBooking={this.props.checkoutBooking} />
            </div>
          </div>
        </section>
        <Categories data={itemDetails.categories} />

        <Testimony data={itemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
// const mapStateToProps = (state) => ({
//   page: state.page,
// });

export default connect(null,{checkoutBooking})(DetailsPage);
