import React from "react";
import Header from "../parts/Header";
export default function forgotpassword() {
  return (
    <>
      <Header isCentered />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div
            className="col-7 mt-3"
            style={{
              height: "10rem",
              borderRadius: 20,
              backgroundColor: "white",
            }}
          >
            <h2
              className="h4 mt-3 text-center text-gray-700"
              style={{ fontFamily: "Poppins", fontWeight: 600 }}
            >
              Forgot Password
            </h2>
            <form class="row g-3 mt-2 justify-content-center">
              <div class="col-auto">
                <label
                  for="staticEmail2"
                  className="form-control-plaintext"
                  style={{ fontFamily: "Poppins", fontSize: 17 }}
                >
                  Email
                </label>
              </div>
              <div class="col-7">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Email"
                  style={{ fontFamily: "Poppins", fontSize: 16 }}
                />
              </div>
              <div className="col-auto">
                <button type="submit" class="btn btn-success mb-3">
                  Send email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
