import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import propTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "../elements/Button";

import { InputDate, InputNumber } from "../elements/Form";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        track: "",
        nameMountain:"",
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      name:this.props.itemDetails.name,
      duration: data.duration,
      price:this.props.itemDetails.price,
      track: data.track,
      nameMountin:data.name,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { data } = this.state;
    const { itemDetails } = this.props;

    return (
      <div className="card bordered" style={{ padding: "20px 40px" }}>
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 mb-4" style={{ color: "#6ECCAF" }}>
          Rp{itemDetails.price}{" "}
          <span className="text-gray-500 font-weight-light">
            per {itemDetails.unit}
          </span>
        </h5>

        <label htmlFor="duration">How long you will stay?</label>
        <InputNumber
          max={30}
          suffix={" day"}
          isSuffixPlural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />

        <label htmlFor="date">Pick a date</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />
        <label htmlFor="date">Choose Track</label>
        <Form.Select className="select" name="track" onChange={this.updateData} value={data.track} required>
        <option value={null} required>--Pilih Track--</option>
          {itemDetails.track.map((street, index) => {
            return (
              <option key={`street-Rp{index}`} value={street.nameTrack}>
                {street.nameTrack}
              </option>
            );
          })}
        </Form.Select>
        <h6
          className="text-gray-700 mt-3"
          style={{ marginBottom: 30, fontWeight: 370, fontFamily: "Poppins" }}>
          You will pay{" "}
          <span className="text-gray-900" style={{ fontWeight: 600 }}>
            Rp{itemDetails.price * data.duration} 
          </span>{" "}
          per{" "}
          <span className="text-gray-900" style={{ fontWeight: 600 }}>
            {data.duration} {itemDetails.unit}
          </span>
        </h6>

        <Button
          className="btn mb-3"
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBooking}>
          Continue to Book
        </Button>
       
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default withRouter(BookingForm);
