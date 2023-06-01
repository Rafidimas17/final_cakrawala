import React, { Component } from "react";
import Fade from "react-reveal";

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

export default class Checkout extends Component {
  state = {
    data: [
      {
        fullname: "",
        address: "",
        no_id: "",
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
      updatedRows[rowIndex][name] = value;
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

    const checkout = {
      duration: 3,
    };
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
                      <Button
                        className="btn mb-3"
                        type="button"
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={nextStep}>
                        Continue to Book
                      </Button>
                      {/* <Button
        className="btn mb-3"
        type="button"
        isBlock
        isPrimary
        hasShadow
        onClick={() => console.log(data)}
      >
        Print
      </Button> */}
                    </Fade>
                  )}

                  {/* <Button
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    onClick={prevStep}
                    // href={`/properties/${ItemDetails}`}
                  >
                    Cancel
                  </Button> */}
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
