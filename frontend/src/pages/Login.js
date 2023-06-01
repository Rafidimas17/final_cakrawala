import React, { useState } from "react";
import Button from "../elements/Button";
import CardWelcome from "../parts/CardWelcome";
import { IconGoogle } from "../assets";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (e) => {
    const emailUser = e.target.value;
    setEmail(emailUser);
  };

  const passwordChange = (e) => {
    const passwordUser = e.target.value;
    setPassword(passwordUser);
  };

  const dataUserLogin = {
    email: email,
    password: password,
  };
  const handleLogin = () => {
    console.log(dataUserLogin);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-tag col-6">
            <CardWelcome />
          </div>
          <div className="col-6 p-5">
            <div className="container">
              <h5 className="title-signup">Login</h5>
              <p className="tagline-welcome mt-2">
                Don't have any account?{" "}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <span className="regist"> Register</span>
                </Link>
              </p>
              <form className="input-group-form">
                <div className="form-group">
                  <h4 htmlFor="exampleInputEmail">Email</h4>
                  <input
                    type="text"
                    value={email}
                    className="form-control"
                    onChange={emailChange}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="form-group">
                  <h4 htmlFor="exampleInputPassword">
                    Password
                    <Link to="/forgotpassword">
                      <span
                        htmlFor="exampleForgotPassword"
                        className="forgot-password float-right"
                      >
                        Forgot Password?
                      </span>
                    </Link>
                  </h4>
                  <input
                    type="password"
                    value={password}
                    onChange={passwordChange}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="example"
                  />
                </div>

                <div className="form-group">
                  <Button
                    className="btn btn-shadow mt-4"
                    href="/"
                    onClick={() => handleLogin()}
                    type="link"
                    style={{
                      borderRadius: 8,
                      backgroundColor: "#3252DF",
                      color: "white",
                      width: "100%",
                      height: "52px",
                      padding: "13px",
                      boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                      fontSize: "15px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Login
                  </Button>
                </div>
                <div className="form-group mb-0 justify-content-center text-center">
                  <h4 className="text-center" htmlFor="exampleInputPassword">
                    OR
                  </h4>
                </div>
                <div className="form-group">
                  <Button
                    className="btn btn-shadow mt-2"
                    href="/welcome"
                    type="link"
                    style={{
                      borderRadius: 8,
                      backgroundColor: "#FDFDFD",
                      color: "#2D2D2D",
                      width: "100%",
                      height: "52px",
                      padding: "13px",
                      boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                      fontSize: "15px",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                    }}
                  >
                    <img
                      src={IconGoogle}
                      alt="icon-google.png"
                      style={{ width: 28, height: 28, alignItems: "center" }}
                    />{" "}
                    with{" "}
                    <span
                      style={{
                        fontFamiy: "Poppins",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#2d2d2d",
                      }}
                    >
                      Google
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
