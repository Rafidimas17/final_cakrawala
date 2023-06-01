import React from "react";
import Fade from "react-reveal/Fade";
import { InputText } from "../../elements/Form";
import ReservationSummary from "./ReservationSummary";
import "./booking.scss";
export default function BookingInformation(props) {
  const { data} = props;

  return (
    <Fade>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 " style={{ paddingRight: 30 }}>
            <div className="row">
              <div className="col-8">
                <h5 className="h3">Hikers Information</h5>
                <p style={{ fontFamily: "Poppins" }}>
                  Please fill your information with completed
                </p>
              </div>
              <div
                className="col-4 d-flex justify-content-end"
                style={{ height: "100%" }}>
                <button className="btn-add mt-2 shadow" onClick={props.handleAddRow}>
                  <span>Add Member</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </button>
              </div>
            </div>
            {data.map((item, index) => {
              return (
                <Fade delay={300}>
                  <div
                    className="card shadow p-3 mb-5 bg-white rounded mt-3"
                    key={`row-${index}`}
                    value={item}
                    id={`item ${index}`}>
                    <div className="row mt-1 p-2">
                      <div className="col">
                        <div className="card">
                          <div className="row">
                            <div className="col-6 ">
                              <h5
                                className="h5 p-2"
                                style={{
                                  fontFamily: "Poppins",
                                  fontWeight: 700,
                                }}>
                                {`Hikers ${index + 1}`}
                              </h5>
                            </div>
                            <div className="col-6  d-flex justify-content-end">
                              {index !== 0 && (
                                <button
                                  className="Btn"
                                  onClick={() => props.handleRemoveRow(index)}>
                                  <div className="sign">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="#ffffff"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round">
                                      <polyline points="3 6 5 6 21 6"></polyline>
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                      <line
                                        x1="10"
                                        y1="11"
                                        x2="10"
                                        y2="17"></line>
                                      <line
                                        x1="14"
                                        y1="11"
                                        x2="14"
                                        y2="17"></line>
                                    </svg>
                                  </div>
                                  <div className="text">Delete</div>
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="row p-2">
                            {/* <div className="col-6 border"></div> */}
                            <div className="col-6 ">
                              <h5
                                className="h6"
                                style={{
                                  fontFamily: "Poppins",
                                  fontWeight: 500,
                                }}>
                                Name
                              </h5>
                              <InputText
                                type="text"
                                name="fullname"
                                value={item.fullname}
                                onChange={(event) =>
                                  props.onChange(event, index)
                                }
                              />

                              <h5
                                className="h6"
                                style={{
                                  fontFamily: "Poppins",
                                  fontWeight: 500,
                                }}>
                                Address
                              </h5>
                              <InputText
                                type="text"
                                name="address"
                                value={item.address}
                                onChange={(event) =>
                                  props.onChange(event, index)
                                }
                              />
                            </div>
                            <div className="col-6 ">
                              <h5
                                className="h6"
                                style={{
                                  fontFamily: "Poppins",
                                  fontWeight: 500,
                                }}>
                                No ID
                              </h5>
                              <InputText
                                type="number"
                                name="no_id"
                                value={item.no_id}
                                onChange={(event) =>
                                  props.onChange(event, index)
                                }
                              />
                              <h6
                                style={{
                                  fontFamily: "Poppins",
                                  fontWeight: 500,
                                }}>
                                No Phone
                              </h6>
                              <InputText
                                type="phone"
                                name="phone"
                                value={item.phone}
                                onChange={(event) =>
                                  props.onChange(event, index)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
          <ReservationSummary />
        </div>
      </div>
    </Fade>
  );
}
