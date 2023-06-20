import React, { Component } from "react";
import Fade from "react-reveal";
import { connect } from "react-redux";
import Header from "../parts/Header";
import Button from "../elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "../elements/Stepper";

import BookingInformation from "../parts/Checkout/BookingInformation";
import Payment from "../parts/Checkout/Payment";
import Completed from "../parts/Checkout/Completed";

import ItemDetails from "../json/bookingInformation.json";

import ReservationSummary from "../parts/Checkout/ReservationSummary";

class Checkout extends Component {
  state = {
    data: [
      {
        fullname: "",
        address: "",
        no_id: "",
        email:"",
        country:"",
        phone: "",
        proofPayment: "",
        bankName: "",
        bankHolder: "",
      },
    ],
  };

  onChange = (event, rowIndex) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      const updatedRows = [...prevState.data];
      if (updatedRows[rowIndex]) {
        updatedRows[rowIndex][name] = value;
      }
      return {
        data: updatedRows,
      };
    });
  };
  
  handleAddRow = () => {
    this.setState((prevState) => ({
      data: [
        ...prevState.data,
        {
          fullname: "",
          address: "",
          email:"",
          country:"",
          no_id: "",
          phone: "",
        },
      ],
    }));
  };
  handleRemoveRow = (index) => {
    this.setState((prevState) => {
      const updatedRows = [...prevState.data];
      updatedRows.splice(index, 1);
      return {
        data: updatedRows,
      };
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const { data } = this.state;
    const { checkout } = this.props;
    if (!checkout)
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}>
            <div className="col-3">
              Pilih tanggal dulu
              <div>
                <Button
                  className="btn mt-5"
                  type="button"
                  onClick={() => this.props.history.goBack()}
                  isLight>
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      );

    const steps = {
      bookingInformation: {
        title: null,
        description: null,
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
            handleAddRow={this.handleAddRow}
            handleRemoveRow={this.handleRemoveRow}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: null,
        content: (
          <Payment
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yeay! Completed",
        description: "",
        content: <Completed />,
      },
    };
    return (
      <>
        <Header isCentered />
        <Stepper steps={steps} initialStep="">
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.some(
                    (row, index) =>
                      data[index].fullname !== "" &&
                      data[index].no_id !== "" &&
                      data[index].address !== "" &&
                      data[index].phone !== ""
                  ) && (
                    <Fade>
                      <div className="row">
                        <div className="col d-flex justify-content-center">
                          <Button
                            className="btn mb-3"
                            type="button"
                            isBlock
                            isPrimary
                            hasShadow
                            onClick={nextStep}>
                            Continue to Book
                          </Button>
                        </div>
                      </div>
                    </Fade>
                  )}
                </Controller>
              )}
              {CurrentStep === "payment" && (
                <Fade>
                  <Controller>
                    {data.proofPayment !== "" &&
                      data.bankName !== "" &&
                      data.bankHolder !== "" && (
                        <Fade>
                          <Button
                            className="btn mb-3"
                            type="button"
                            isBlock
                            isPrimary
                            hasShadow
                            onClick={nextStep}>
                            Continue to Book
                          </Button>
                        </Fade>
                      )}
                    <Button
                      className="btn"
                      type="link"
                      isBlock
                      isLight
                      onClick={prevStep}>
                      Cancel
                    </Button>
                  </Controller>
                </Fade>
              )}
              {CurrentStep === "completed" && (
                <Fade>
                  <Controller>
                    <Button
                      className="btn"
                      type="link"
                      isBlock
                      isPrimary
                      hasShadow
                      href="">
                      Back to Home
                    </Button>
                  </Controller>
                </Fade>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  checkout: state.checkout,
});
export default connect(mapStateToProps)(Checkout);
