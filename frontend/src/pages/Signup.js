import React, { useState } from "react";
import Button from "../elements/Button";
import CardWelcome from "../parts/CardWelcome";
export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (e) => {
    const nameUsername = e.target.value;
    setUsername(nameUsername);
  };

  const emailHandler = (e) => {
    const emailUser = e.target.value;
    setEmail(emailUser);
  };

  const passwordHandler = (e) => {
    const passwordUser = e.target.value;
    setPassword(passwordUser);
  };

  const dataSignup = {
    username: username,
    email: email,
    password: password,
  };
  const signupHandler = () => {
    console.log(dataSignup);
  };

  return (
    <>
      <div className="container">
        {/* <Header isCentered /> */}
        <div className="row">
          <div className="col-tag col-6 d-none d-md-block">
            <CardWelcome />
          </div>
          <div className="col-6 p-5">
            <div className="container">
              <h5 className="title-signup">Sign up</h5>
              <p className="tagline-welcome mt-2">
                Create your account and get started!
              </p>
              <form className="input-group-form">
                <div className="form-group">
                  <h4 htmlFor="exampleInputUsername">Username</h4>
                  <input
                    type="text"
                    value={username}
                    onChange={usernameHandler}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="example"
                  />
                </div>
                <div className="form-group">
                  <h4>Email</h4>
                  <input
                    type="text"
                    value={email}
                    onChange={emailHandler}
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="example@example.com"
                  />
                </div>
                <div className="form-group">
                  <h4>Password</h4>
                  <input
                    type="password"
                    value={password}
                    onChange={passwordHandler}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="example"
                  />
                </div>
                <div className="form-group">
                  <Button
                    // id="btn-signup"
                    className="btn btn-shadow mt-4"
                    href="/login"
                    type="link"
                    onClick={() => signupHandler()}
                    style={{
                      borderRadius: 8,
                      backgroundColor: "#3252DF",
                      color: "white",
                      width: "168px",
                      height: "52px",
                      padding: "13px",
                      boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                      fontSize: "15px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Create account
                  </Button>
                  {/* <button className="btn-signup">
                    <a href="/login" className="signup-link"></a>
                  </button> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
