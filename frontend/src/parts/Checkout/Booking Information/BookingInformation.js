import React from "react";
import BookingDetail from "../../../json/bookingInformation.json";
import DetailTeam from "./DetailTeam";
import ReservationSummary from "../ReservationSummary";
import "./booking.scss";
export default function BookingInformation() {
  return (
    <section className="spacing-sm mt-5">
      <div className="container ">
        <div className="row">
          <DetailTeam />
          <ReservationSummary data={BookingDetail} />
        </div>
      </div>
    </section>
  );
}
