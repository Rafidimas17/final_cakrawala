import React from "react";
import ReservationSummary from "../Booking Information/ReservationSummary";
import PaymentDetail from "./PaymentDetail";
import "./Payment.scss";
import dataDetail from "../../../json/paymentDetail.json";
import DataBooking from "../../../json/bookingInformation.json";
export default function Payment() {
  return (
    <div className="spacing-sm mt-5">
      <div className="container">
        <div className="row">
          <PaymentDetail dataPayment={dataDetail} />
          <ReservationSummary data={DataBooking} />
        </div>
      </div>
    </div>
  );
}
