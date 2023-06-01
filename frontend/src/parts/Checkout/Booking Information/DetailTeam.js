import React, { useState } from "react";
import InputText from "../../../elements/Form/InputText";
// import "./booking.scss";
export default function DetailTeam({ data }) {
  const [getMember, setMember] = useState([]);
  const handleAdd = () => {
    const team = [...getMember, []];
    setMember(team);
  };
  // const handleChange = (onChangeValue, i) => {
  //   const inputData = [...getMember];
  //   inputData[i] = onChangeValue.target.value;
  //   setMember(inputData);
  // };
  const handleDelete = (items) => {
    const deletVal = [...getMember];
    deletVal.splice(items, 1);
    setMember(deletVal);
  };
  console.log("data-", getMember);

  return (
    <div
      className="col-7 pr-3 mr-5"
      style={{ backgroundColor: "white", borderRadius: 8 }}>
      <div className="card m-3">
        <div className="detail ">
          <h3
            className="titleTeam"
            style={{ fontFamily: "Poppins", fontWeight: 570, fontSize: 20 }}>
            Enter your details
          </h3>
          <div
            className="row"
            style={{ border: "1px solid #A5A5A5", borderRadius: 8 }}>
            <div className="col mt-2">
              <h5
                className="h6"
                style={{ fontFamily: "Poppins", fontWeight: 500 }}>
                Name
              </h5>
              <InputText />
              <h5
                className="h6"
                style={{ fontFamily: "Poppins", fontWeight: 500 }}>
                Address
              </h5>
              <InputText />
            </div>
            <div className="col mt-2">
              <h6 style={{ fontFamily: "Poppins", fontWeight: 500 }}>
                No KTP/Pasport
              </h6>
              <InputText />
              <h6 style={{ fontFamily: "Poppins", fontWeight: 500 }}>
                No Telepon
              </h6>
              <InputText />
            </div>
          </div>
          <section>
            <button
              className="button_plus mt-3"
              onClick={() => handleAdd()}></button>
          </section>
          {getMember.map((item, index) => {
            return (
              <div
                key={`row-${index}`}
                value={item}
                className="row mt-3"
                id={`item ${index}`}
                style={{ border: "1px solid #A5A5A5", borderRadius: 8 }}>
                <div className="col mt-4">
                  <h5
                    className="h6"
                    style={{ fontFamily: "Poppins", fontWeight: 500 }}>
                    Name
                  </h5>
                  <InputText />
                  <h5
                    className="h6"
                    style={{ fontFamily: "Poppins", fontWeight: 500 }}>
                    Address
                  </h5>
                  <InputText />
                </div>
                <div className="col mt-4">
                  <h6 style={{ fontFamily: "Poppins", fontWeight: 500 }}>
                    No KTP/Pasport
                  </h6>
                  <InputText />
                  <h6 style={{ fontFamily: "Poppins", fontWeight: 500 }}>
                    No Telepon
                  </h6>
                  <InputText />
                </div>
                <button class="Btn">
                  <div class="sign">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0,0,256,256"
                      width="64px"
                      height="64px"
                      fill-rule="nonzero">
                      <g
                        fill="#ffffff"
                        fill-rule="nonzero"
                        stroke="none"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                        style="mix-blend-mode: normal">
                        <g transform="scale(2,2)">
                          <path d="M49,1c-1.66,0 -3,1.34 -3,3c0,1.66 1.34,3 3,3h30c1.66,0 3,-1.34 3,-3c0,-1.66 -1.34,-3 -3,-3zM24,15c-7.17,0 -13,5.83 -13,13c0,7.17 5.83,13 13,13h77v63c0,9.37 -7.63,17 -17,17h-40c-9.37,0 -17,-7.63 -17,-17v-52c0,-1.66 -1.34,-3 -3,-3c-1.66,0 -3,1.34 -3,3v52c0,12.68 10.32,23 23,23h40c12.68,0 23,-10.32 23,-23v-63.35937c5.72,-1.36 10,-6.50062 10,-12.64062c0,-7.17 -5.83,-13 -13,-13zM24,21h80c3.86,0 7,3.14 7,7c0,3.86 -3.14,7 -7,7h-80c-3.86,0 -7,-3.14 -7,-7c0,-3.86 3.14,-7 7,-7zM50,55c-1.66,0 -3,1.34 -3,3v46c0,1.66 1.34,3 3,3c1.66,0 3,-1.34 3,-3v-46c0,-1.66 -1.34,-3 -3,-3zM78,55c-1.66,0 -3,1.34 -3,3v46c0,1.66 1.34,3 3,3c1.66,0 3,-1.34 3,-3v-46c0,-1.66 -1.34,-3 -3,-3z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>

                  <div class="text">Logout</div>
                </button>

                <button
                  onClick={() => handleDelete(index)}
                  className="button_minus"></button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
