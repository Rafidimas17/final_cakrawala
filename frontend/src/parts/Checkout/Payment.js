import React, { useState } from "react";
import Fade from "react-reveal/Fade";
// import { IconQris } from "../../assets";
// import { InputText, InputFile } from "../../elements/Form";

// import logoBca from "assets/images/logo-bca.jpg";
import { IconMandiri } from "../../assets";
import Button from "../../elements/Button";

export default function Payment(props) {
  // const {  ItemDetails, checkout } = props;

  // const tax = 10;
  // const subTotal = ItemDetails.price * checkout.duration;
  // const grandTotal = (subTotal * tax) / 100 + subTotal;

  const [selectedRadio, setSelectedRadio] = useState("");
  const [formData, setFormData] = useState({});

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedRadio(selectedValue);

    // Parsing data value ke dalam objek
    const updatedFormData = { ...formData, paymentMethod: selectedValue };
    setFormData(updatedFormData);

    console.log("Nilai radio yang dipilih:", selectedValue);
    console.log("Data Form:", updatedFormData);
  };

  return (
    <Fade>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-8 border-right py-2" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <label
                className="form-check-label"
                htmlFor="flexRadioDefault1"
                style={{ fontFamily: "Poppins", fontWeight: 550 }}>
                QRIS
              </label>
              <div className="card shadow p-3">
                <div className="form-check p-2 d-flex align-items-center">
                  <input
                    className="form-check-input ml-3"
                    type="radio"
                    name="radioGroup"
                    id="qrisRadio"
                    value="QRIS"
                    checked={selectedRadio === "QRIS"}
                    onChange={handleRadioChange}
                    style={{ width: 20, height: 20 }}
                  />
                  <img
                    src={IconMandiri}
                    className="ml-5"
                    alt="mandiri"
                    width="60"
                  />
                  
                </div>
              </div>
              <label
                className="form-check-label mt-4"
                htmlFor="flexRadioDefault1"
                style={{ fontFamily: "Poppins", fontWeight: 550 }}>
                Transfer Virtual Account
              </label>
              <div className="card shadow p-3">
                <div className="form-check p-2 d-flex align-items-center">
                  <input
                    className="form-check-input ml-3"
                    type="radio"
                    name="radioGroup"
                    id="virtualAccountRadio"
                    value="Virtual Account"
                    checked={selectedRadio === "Virtual Account"}
                    onChange={handleRadioChange}
                    style={{ width: 20, height: 20 }}
                  />
                  <img
                    src={IconMandiri}
                    className="ml-5"
                    alt="mandiri"
                    width="60"
                  />
                  
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-4">
            <Fade delay={600}>
              <div className="card  p-3 border">
                <h5 className="h5" style={{ fontFamily: "Poppins" }}>
                  Payment Information
                </h5>
                <div className="row">
                  <div className="col">
                    <h5
                      className="h5 font-weight-bold"
                      style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      Start
                    </h5>
                    <h5
                      className="h5 font-weight-bold"
                      style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      Expired
                    </h5>
                    <h5
                      className="h5 font-weight-bold"
                      style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      Total
                    </h5>
                  </div>
                  <div className="col">
                    <h5
                      className="h5 font-weight-bold text-right"
                      style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      2023-10-23
                    </h5>
                    <h5
                      className="h5 font-weight-bold text-right"
                      style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      2023-10-24
                    </h5>
                    <h5
                      className="h5 font-weight-bold text-right"
                      style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      Rp 78,000
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card mt-3 p-3 border">
                {/* <h5 className="h5" style={{fontFamily:"Poppins"}}>Payment Information</h5> */}
                <div className="row">
                  <div className="col">
                    <h5
                      className="h5 font-weight-reguler"
                      style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      Pay With
                    </h5>
                    <h5
                      className="h5 font-weight-bold"
                      style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      Processing Fee
                    </h5>
                    <h5
                      className="h5 font-weight-bold"
                      style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      Total Pay
                    </h5>
                  </div>
                  <div className="col">
                    <h5
                      className="h5 font-weight-bold text-right"
                      style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      {selectedRadio}
                    </h5>
                    <h5
                      className="h5 font-weight-bold text-right"
                      style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      Rp 1000
                    </h5>
                    <h5
                      className="h5 font-weight-bold text-right"
                      style={{ fontFamily: "Poppins", fontSize: 16 }}>
                      Rp 79,000
                    </h5>
                  </div>
                </div>
                <Button
                  className="btn mb-3"
                  type="button"
                  isBlock
                  isPrimary
                  hasShadow>
                  Pay Now
                </Button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
