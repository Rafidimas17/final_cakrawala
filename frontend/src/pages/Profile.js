import React from "react";
import { Link } from "react-router-dom";
import Header from "../parts/Header";
import { IconPersonal } from "../assets";
import { IconLogout } from "../assets";
import { IconMembership } from "../assets";
export default function Profile() {
  return (
    <>
      <Header isCentered />
      <div className="container mt-3" style={{ height: "100vh" }}>
        <div className="row">
          <div
            className="account-space col-3 m-2 pb-2"
            style={{ width: "100%", height: "100%" }}
          >
            <div className="card mb-4 p-2 d-flex">
              <h2 className="account-profile mt-3 ml-2">Account</h2>
              {/* <div className="card-body"> */}
              <Link to="/signup" className="card-account text-decoration-none">
                <div className="account-inform mt-2 d-flex align-items-center">
                  <img
                    src={IconPersonal}
                    alt="icon-personal"
                    className="icon-title"
                  />
                  <h5 className="m-1">Personal Information</h5>
                </div>
              </Link>
              <Link to="/signup" className="card-account text-decoration-none">
                <div className="account-inform mt-3  d-flex align-items-center">
                  <img
                    src={IconMembership}
                    alt="icon-personal"
                    className="icon-title"
                  />
                  <h5 className="m-1">Membership Setting</h5>
                </div>
              </Link>
              <Link to="/signup" className="card-account text-decoration-none">
                <div
                  className="account-inform mt-4
                mb-5"
                >
                  <img
                    src={IconLogout}
                    alt="icon-personal"
                    className="icon-title"
                  />
                  <h5 className="m-1">Logout</h5>
                </div>
              </Link>

              {/* </div> */}
            </div>
          </div>
          <div className="personal col m-2">
            <h2 className="ml-2 mt-3">Personal Information</h2>
            <hr></hr>
            {/* <span className="border-bottom">asa</span> */}
            <div className="information-user row m-1 border">
              <div className="col-1 d-flex align-items-center">
                <img
                  src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="icon-personal"
                  className="user-photo"
                />
              </div>
              <div className="col-7 ml-2">
                <h4 className="name-user mx-auto mt-4 mb-0">
                  Furky R Syahroni
                </h4>
                <Link to="/signup" className="text-decoration-none">
                  <h4 className="change-avatar mt-0">Change Avatar</h4>
                </Link>
                {/* <h4></h4> */}
              </div>
              <div className="col d-flex align-items-center">
                <h4 className="member-status">Premium Membership</h4>
              </div>
            </div>
            <hr></hr>
            <div className="row m-1">
              <div className="first-col col-lg-6 ">
                <h4 className="account-info mt-2">Account Information</h4>
                <h4 className="title-personal">First name</h4>
                <h4 className="data-personal">Furky R</h4>

                <h4 className="title-personal mt-3">ID Card</h4>
                <h4 className="data-personal">Furky R</h4>
              </div>
              <div className="last-col col-lg-6" style={{ height: "100%" }}>
                <Link to="/" className="text-decoration-none">
                  <h4 className="change-profile text-center mt-2">
                    Change Profile
                  </h4>
                </Link>
                <h4 className="title-personal">Last name</h4>
                <h4 className="data-personal">Syahroni</h4>

                <h4 className="title-personal mt-3">No ID</h4>
                <h4 className="data-personal">2333423432143234</h4>
              </div>
            </div>
            <hr></hr>
            <div className="row m-1">
              <h4 className="pyhsical-info mt-2">Physical Address</h4>
              <div className="first-col col-lg-6 ">
                <h4 className="title-personal">Country</h4>
                <h4 className="data-personal">Indonesia</h4>

                <h4 className="title-personal mt-3">Address</h4>
                <h4 className="data-personal">Jl. Gunung salak, No.17</h4>
              </div>
              <div className="last-col col-lg-6" style={{ height: "100%" }}>
                <h4 className="title-personal">City</h4>
                <h4 className="data-personal">Jombang</h4>

                <h4 className="title-personal mt-3">Postal Code</h4>
                <h4 className="data-personal">61473</h4>
              </div>
              <h4 className="phone-personal mt-3">Phone Number</h4>
              <h4 className="data-phone ml-3 mb-4">085645663350</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
